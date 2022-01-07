import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import './App.css';
import Nav from "./nav";
import Home from "./Home";
import Shop from "./Shop";


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>   
  );
}

export default App;
