import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "../App";
import '../style/ShoppingCart.css';

const ShoppingCart = () => {
  const shoppingBag = useContext(ShoppingBag);

  return (
    <Link to="/shopping-cart/checkout">
      <div className="shopping-cart">
        <p>{shoppingBag.itemsAmount}</p>
      </div>
    </Link>
  )
};

export default ShoppingCart;