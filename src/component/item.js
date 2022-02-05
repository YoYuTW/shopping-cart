import React, { useContext } from "react";
import { ShoppingBag } from "../App";
import '../style/Item.css';

const Item = (props) => {
  const addToCart = useContext(ShoppingBag).addToCart;

  return (
    <div className="item">
      <img src={props.img} alt={props.alt}/>
      <p>{props.amount}</p>
      <p>{props.price}</p>
      <button className={props.set} onClick={addToCart}>加入購物車</button>
    </div>
  )
};

export default Item;