import React from "react";
import { Link } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";

const Nav = (props) => {
  const linkStyle = {
    color: 'white',
    fontSize: '3vw',
  };

  const navStyle = {
    display: 'flex',
    backgroundColor: 'rgb(1, 116, 1)',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '10vh',
  };

  const logoStyle = {
    color: 'white',
    fontSize: '4vw',
    boxSizing: 'border-box',
  }

  return (
    <nav style={navStyle}> 
      <h3 style={logoStyle}>阿蜜鳳梨</h3>
      <ul className="nav-links">
        <Link style={linkStyle} to='/'>
          <li>Home</li>
        </Link>
        <Link style={linkStyle} to='/about'>
          <li>About</li>
        </Link>
        <Link style={linkStyle} to='/shop'>
          <li>Shop</li>
        </Link>
      </ul>
      <ShoppingCart itemCount={props.itemCount} cartItems={props.cartItems} adjustAmount={props.adjustAmount}/>
    </nav>
  )
};

export default Nav;