import React from "react";
import homepage from './component/homepage.png';

const Home = () => {
  const style = {
    backgroundImage: `url(${homepage})`,
    height: '66vh',
  }
  return (
    <div className="page d-flex justify-content-center display-1" style={style}>
      <p className="mt-5">        
        金鑽鳳梨的故鄉
      </p>     
    </div>
  );
};

export default Home;