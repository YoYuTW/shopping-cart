import React from "react";

import Item from "./Item";
import setA from "../asset/setA.png";
import setB from "../asset/setB.png";
import setC from "../asset/setC.png";
import '../style/Shop.css';

const Shop = (props) => {
  return (
    <div className="spa-content shop">
      <h1>銷售方式</h1>
      <p>每箱鳳梨的數量，以下費用皆含宅配運費</p>
      <h3>各種類限購三箱</h3>
      <br />
        <div className="pineapple-menu">
          <Item img={setA} amount='每顆約3台斤' price='500元' set="setA" click={props.click}/>
          <Item img={setB} amount='每顆約3台斤' price='650元' set="setB" click={props.click}/>
          <Item img={setC} amount='每顆約2台斤' price='650元' set="setC" click={props.click}/>
        </div>            
    </div>
  );
};

export default Shop;