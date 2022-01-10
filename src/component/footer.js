import React from "react";

const Footer = () => {
  const footerStyle = {
    marginTop: '2vh',
    backgroundColor: 'grey',
    width: '100%',
    height: '10vh',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    justifySelf: 'flex-end',
  };

  return (
    <footer style={footerStyle}>
      <h1>阿蜜鳳梨</h1>
      <span>嘉義縣民雄鄉三興村</span>
    </footer>
  )  
};

export default Footer;