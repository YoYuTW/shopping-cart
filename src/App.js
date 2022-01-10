import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import './App.css';
import Nav from "./component/nav";
import Home from "./Home";
import Shop from "./Shop";
import Footer from "./component/footer";


function App() {  
  const [cartItems, setCartItems] = useState({
    setA: 0,
    setB: 0,
    setC: 0,
  });

  const addToCart = (e) => {
    const set = e.target.classList[0];
    setCartItems(prevItems => ({...prevItems, [set]: prevItems[set] + 1 }));
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

  const pageStyle = {
    height: '78vh',
  }
  
  return (
    <BrowserRouter>
      <Nav itemCount={itemsAmount} cartItems={cartItems} adjustAmount={adjustAmount}/>
      <div style={pageStyle}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop click={addToCart} />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>   
  );
}

export default App;
