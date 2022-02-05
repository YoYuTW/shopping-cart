import React from "react";
import icon from "../asset/pineappleBrand.png";
import { Link } from "react-router-dom";
import '../style/Nav.css';

function Nav() {
  return (
    <nav>
      <Link to='/shopping-cart/'>
        <img src={icon} alt="a-bit pineapple"/>
        <h2>阿蜜鳳梨</h2>
      </Link>
      <Link to='/shopping-cart/shop'>Shop</Link>      
    </nav>
  )
};

export default Nav;
