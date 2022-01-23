import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import shoppingCart from "./shopping-cart.png";
import ShoppingList from "./ShoppingList";

const ShoppingCart = (props) => {
  const [buttonClick, setButtonClick] = useState(false);
  
  const closeList = () => {
      setButtonClick(false);
  };    

  const displayItems = () => {
    setButtonClick(true);
  };

  return (
    <React.Fragment>
      <Nav.Link >  
        <div className="d-flex align-items-center gap-1 fs-2" onClick={displayItems}>
          <img src={shoppingCart} alt="" width='48px' height='48px'/> 
          {props.itemCount}
        </div>
      </Nav.Link>
      {buttonClick ? <ShoppingList onClick={closeList} cartItems={props.cartItems} adjustAmount={props.adjustAmount}/> : null}
    </React.Fragment>
  )
};

export default ShoppingCart;