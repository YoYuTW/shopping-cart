import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Nav from "./component/Nav";
import Home from "./component/Home";
import Shop from "./component/Shop";
import Footer from "./component/Footer";
import './App.css';
import ShoppingList from "./component/ShoppingList";
import ShoppingCart from "./component/ShoppingCart";


export const ShoppingBag = React.createContext();

function App() {  
  const [cartItems, setCartItems] = useState({
    setA: 0,
    setB: 0,
    setC: 0,
  });

  const addToCart = (e) => {
    const set = e.target.classList[0];    
    if (cartItems[set] + 1 <= 3) {
      setCartItems(prevItems => ({...prevItems, [set]: prevItems[set] + 1 }));
    } else {
      return
    }    
  };

  const adjustAmount = (set, value) => {
    setCartItems(prevItems => ({...prevItems, [set]: parseInt(value, 10) }));
  };

  const [itemsAmount, setItemAmount] = useState(0);

  useEffect(() => {
    const amountArray = Object.values(cartItems);
    const value = amountArray.reduce((previousValue, currentValue) => 
      parseInt(previousValue, 10) + parseInt(currentValue, 10));
    setItemAmount(value);
  }, [itemsAmount, cartItems]);  
  
  return (
    <BrowserRouter>
      <ShoppingBag.Provider value={{ cartItems, itemsAmount, addToCart, adjustAmount }}>
        <Nav/>
        <ShoppingCart />
        <Routes>
          <Route path="/shopping-cart/" element={<Home/>} />
          <Route path="/shopping-cart/shop" element={<Shop click={addToCart} />} />
          <Route path="/shopping-cart/checkout" element={<ShoppingList />} />
        </Routes>
        <Footer />        
      </ShoppingBag.Provider>
    </BrowserRouter>   
  );
}

export default App;
