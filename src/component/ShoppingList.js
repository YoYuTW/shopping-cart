import React, { useState, useEffect } from "react";
import setA from "./setA.png";
import setB from "./setB.png";
import setC from "./setC.png";

const ShoppingList = (props) => {
  const [itemA, setItemA] = useState(0);
  const [itemB, setItemB] = useState(0);
  const [itemC, setItemC] = useState(0);

  useEffect(() => {
    const values = Object.values(props.cartItems);
    setItemA(values[0]);
    setItemB(values[1]);
    setItemC(values[2]);
  }, [props.cartItems]);

  const listStyle = {
    display: 'flex',
    position: 'absolute',
    flexFlow: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '25vw',
    height: '100vh',
    top: '0',
    right: '0',
    zIndex: '2',
    gap: '2vh',
  };

  const blurStyle = {
    position: 'absolute',
    backgroundColor: 'rgba(0%, 40%, 0%, 0.4)',
    width: '100vw',
    height: '100vh',
    top: '0',
    left: '0',
    zIndex: '1'
  };

  const exitBtnStyle = {
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    width: '95%',
    height: '5vh',
    fontSize: '3vh',
    fontWeight: 'strong',
    color: 'black',
  };

  const btnStyle = {
    width: 'fit-content',
  };

  return (
    <div>
      <div style={blurStyle} onClick={props.onClick} />
      <div style={listStyle} className="shopping-items">
        <div style={exitBtnStyle} onClick={props.onClick}>X</div>
        {itemA ? <ItemInList img={setA} amount='6入' price='500元' count={itemA} adjustAmount={props.adjustAmount} item='setA'/> : null}             
        {itemB ? <ItemInList img={setB} amount='8入' price='650元' count={itemB} adjustAmount={props.adjustAmount} item='setB'/> : null}
        {itemC ? <ItemInList img={setC} amount='12入' price='650元' count={itemC} adjustAmount={props.adjustAmount} item='setC'/> : null}
        <Total itemA={itemA} itemB={itemB} itemC={itemC} />
        <button style={btnStyle} disabled>結帳（尚未啟用）</button>
      </div>
    </div>
  )
};

const ItemInList = (props) => {
  const [counts, setCounts] = useState(props.count); 

  const handleChange = (e) => {
    e.preventDefault();
    const newValue = e.target.value;
    setCounts(newValue);
  };

  useEffect(() => {
    props.adjustAmount(props.item, counts);
  }, [counts]);

  const itemStyle = {
    display: 'flex',
    gap: '1vw',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const textStyle = {
    display: 'flex',
    flexFlow: 'column',
    fontSize: '2vh',
    height: '10vh',
    justifyContent: 'space-around',
  };

  const picStyle = {
    width: '10vh',
    height: '10vh',
  };

  const inputStyle = {
    fontSize: '2vh',
    border: 0,
  };

  return (
    <div className="itemInList" style={itemStyle}>
      <img src={props.img} alt={props.alt} style={picStyle}/>
      <div style={textStyle}>
        <span>品項：{props.amount}</span>
        <span>價格：{props.price}</span>
        <div>
          <label>數量：</label>
          <input style={inputStyle  } type='number' step='1' min='0' max='5' value={counts} onChange={handleChange}/>
        </div>
      </div>
    </div>
  )
}

const Total = (props) => {
  let total = props.itemA * 500 + (props.itemB + props.itemC) * 650;

  const totalStyle = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginTop: '2vh',
    fontSize: '2vh',
    fontWeight: '800',
    borderTop: '1px black solid',
    paddingTop: '2vh',
  }

  return (
    <div style={totalStyle}>總計：{total}元</div>
  )
}

export default ShoppingList;