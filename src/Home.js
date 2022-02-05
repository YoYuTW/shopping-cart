import React from "react";
import homepage from './component/homepage.png';

const Home = () => {
  const style = {
    left: '35%'
  };
  return (
    <div className="d-flex flex-column align-items-stretch justify-content-center display-1 position-relative">
      <p className="mt-5 flex-fill-1 text-center position-absolute top-0" style={style}>        
        金鑽鳳梨的故鄉
      </p>    
      <img src={homepage} alt='homepage' className="flex-fill-1"/>
    </div>  
  );
};

export default Home;