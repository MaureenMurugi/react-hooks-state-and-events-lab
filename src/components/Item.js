import React, { useState} from "react";

function Item({ name, category }) {
  const [addCart, setAddCart] = useState(false)

  function handleAddCart() {
    setAddCart((addCart) => !addCart)
  }
  return (
    <li className={addCart ? "in-cart" : " "}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddCart} className={addCart ? "remove" : "add"}>{addCart ? "Remove From Cart" : "Add To Cart"}</button>
    </li>
  );
}

export default Item;
