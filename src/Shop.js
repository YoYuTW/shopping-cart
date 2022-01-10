import React from "react";
import Item from "./component/item";
import setA from "./component/setA.png";
import setB from "./component/setB.png";
import setC from "./component/setC.png";

const Shop = (props) => {
  const itemsStyle = {
    display: 'flex',
    flexFlow: 'wrap',
    gap: '10%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }

  return (
    <div className="page">
      <h1>銷售方式</h1>
      <p>每箱鳳梨的數量，以下費用皆含宅配運費</p>
      <br />
      <div className="items" style={itemsStyle}>
        <Item img={setA} amount='每顆約3台斤' price='500元' set="setA" click={props.click}/>             
        <Item img={setB} amount='每顆約3台斤' price='650元' set="setB" click={props.click}/> 
        <Item img={setC} amount='每顆約2台斤' price='650元' set="setC" click={props.click}/>   
      </div>
    </div>
  );
};

export default Shop;