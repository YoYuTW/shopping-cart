import React from "react";
import pineapple from './pineapple.jpeg';

const Home = () => {
  return (
    <div className="page">
      <h1>阿蜜鳳梨</h1>
      <p>高品質的台農17號金鑽鳳梨</p>
      <img src={pineapple} alt='金攥' />
    </div>
  );
};

export default Home;