import React, { useState } from "react";
import shoppingCart from "./shopping-cart.png";
import ShoppingList from "./ShoppingList";

const ShoppingCart = (props) => {
  const [buttonClick, setButtonClick] = useState(false);

  const shoppingCartStyle = {
    position: 'relative',
  };

  const shoppingCartImgStyle = {
    width: '5vh',
    height: '5vh',
  };

  const listCountStyle = {
    position: 'absolute',
    left: '50%',
    top: '-8%',
    fontSize: '1.5vh'
  };

  const closeList = (e) => {
    if (e.target.classList[0] !== '.shopping-items'){
      setButtonClick(false);
    }
  };    

  const displayItems = () => {
    setButtonClick(true);
  };

  return (
    <div>
      <div className="shopping-cart" style={shoppingCartStyle} onClick={displayItems}>
          <h3 style={listCountStyle}>{props.itemCount}</h3>
          <img src={shoppingCart} alt="" style={shoppingCartImgStyle}/>     
      </div>
      {buttonClick ? <ShoppingList onClick={closeList} cartItems={props.cartItems} adjustAmount={props.adjustAmount}/> : null}
    </div>
  )
};

export default ShoppingCart;