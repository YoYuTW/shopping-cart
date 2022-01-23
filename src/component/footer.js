import React from "react";

const Footer = () => {
  const style = {
    height: '28vh',
  }
  return (
    <footer style={style} className="d-flex flex-column justify-content-center align-items-center text-light bg-success navbar-fixed-bottom">
      <h1>阿蜜鳳梨 A-bit Pineapple</h1>
      <p>嘉義縣民雄鄉三興村</p>
    </footer>
  )  
};

export default Footer;