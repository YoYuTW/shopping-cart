import React from "react";
import icon from "../asset/pineappleBrand.png";
import { Link } from "react-router-dom";
import '../style/Nav.css';
import ShoppingCart from "./ShoppingCart";

function Nav() {
  return (
    <nav>
      <Link to='/shopping-cart/'>
        <div className="icon">
          <img src={icon} alt="a-bit pineapple"/>
        </div>
      </Link>
      <div>
        <Link to='/shopping-cart/shop'>Shop</Link>
        <ShoppingCart />
      </div>  
    </nav>
  )
};

export default Nav;
