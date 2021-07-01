import React, {useState} from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState(false);
  function changeClass(){
    setCart(!cart)
  }
  return (
    <li className={!cart?'':'in-cart'}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={changeClass}>Add to Cart</button>
    </li>
  );
}

export default Item;
