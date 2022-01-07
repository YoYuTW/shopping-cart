import React from "react";
import { Link } from "react-router-dom";
import shoppingCart from "./component/shopping-cart.png";

const Nav = () => {
  const navStyle = {
    color: 'white',
    fontSize: '40px'
  };

  const shoppingCartStyle = {
    position: 'relative',
  }

  const shoppingCartImgStyle = {
    width: '5vh',
    height: '5vh',
  }

  const listCountStyle = {
    position: 'absolute',
    left: '50%',
    top: '0',
    fontSize: '1em'
  }

  return (
    <nav>
      <h3>logo</h3>
      <ul className="nav-links">
        <Link style={navStyle} to='/'>
          <li>Home</li>
        </Link>
        <Link style={navStyle} to='/about'>
          <li>About</li>
        </Link>
        <Link style={navStyle} to='/shop'>
          <li>Shop</li>
        </Link>
      </ul>
      <div className="shopping-cart" style={shoppingCartStyle}>
        <h3 style={listCountStyle}>4</h3>
        <img src={shoppingCart} alt="" style={shoppingCartImgStyle}/>        
      </div>
    </nav>
  )
};

export default Nav;