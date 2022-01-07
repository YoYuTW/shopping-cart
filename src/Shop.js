import React from "react";
import Item from "./component/item";
import setA from "./component/setA.png";
import setB from "./component/setB.png";
import setC from "./component/setC.png";

const Shop = () => {
  const itemsStyle = {
    display: 'flex',
    gap: '10%',
    justifyContent: 'center',
    alignItems: 'center'
  }

  return (
    <div className="page">
      <h1>銷售方式</h1>
      <p>每箱鳳梨的數量，以下費用皆含宅配運費</p>
      <br />
      <div className="items" style={itemsStyle}>
        <Item img={setA} amount='每顆約2台斤' price='650元' />
        <Item img={setB} amount='每顆約3台斤' price='500元' />
        <Item img={setC} amount='每顆約3台斤' price='650元' /> 
      </div>
    </div>
  );
};

export default Shop;