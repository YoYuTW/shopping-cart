import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import icon from "./pineappleBrand.png";
import ShoppingCart from "./ShoppingCart";
import { Link } from "react-router-dom";

const HomemadeNav = (props) => {

  return (
    <Navbar bg="success" expand="lg" className="">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img alt='A-bit Pineapple' src={icon} width='64px' height='64px'/> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="active fs-2" aria-current="page">Home</Nav.Link>
            <Nav.Link as={Link} to="/shop" className="active fs-2">Shop</Nav.Link>
            <ShoppingCart itemCount={props.itemCount} cartItems={props.cartItems} adjustAmount={props.adjustAmount}/>            
          </Nav>
        </Navbar.Collapse> 
      </Container>
    </Navbar>
  )
};

export default HomemadeNav;
