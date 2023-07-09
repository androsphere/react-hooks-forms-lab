import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce")

  function handleItemSubmit(event){
    event.preventDefault()
    onItemFormSubmit({
      id: uuid(),
      name,
      category,
    });
  }
  function handleItemName(event){
    setName(event.target.value)
  }
  function handleCategory(event){
    setCategory(event.target.value)
    

  }



  return (
    <form className="NewItem" onSubmit={handleItemSubmit}>
      <label>
        Name:
        <input type="text" name="name" value = {name} onChange = {handleItemName}/>
      </label>

      <label>
        Category:
        <select name="category"  value = {category} onChange = {handleCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
