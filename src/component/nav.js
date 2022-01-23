import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import icon from "./pineappleBrand.png";
import ShoppingCart from "./ShoppingCart";
import { Container } from "react-bootstrap";

const HomemadeNav = (props) => {

  return (
    <Navbar bg="success" expand="lg" className="">
      <Container>
        <Navbar.Brand href="/">
          <img alt='A-bit Pineapple' src={icon} width='64px' height='64px'/> 
          阿蜜鳳梨 A-bit Pineapple
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
          <Nav className="ms-auto">
            <Nav.Link href="/shopping-cart/" className="active fs-2" aria-current="page">Home</Nav.Link>
            <Nav.Link href="/shopping-cart/shop" className="active fs-2">Shop</Nav.Link>
            <ShoppingCart itemCount={props.itemCount} cartItems={props.cartItems} adjustAmount={props.adjustAmount}/>            
          </Nav>
        </Navbar.Collapse> 
      </Container>
    </Navbar>
  )
};

export default HomemadeNav;
