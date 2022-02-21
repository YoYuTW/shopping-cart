import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "../App";
import setA from "../asset/setA.png";
import setB from "../asset/setB.png";
import setC from "../asset/setC.png";
import "../style/ShoppingList.css";


const ShoppingList = () => {
  const shoppingBag = useContext(ShoppingBag);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = shoppingBag.cartItems.setA * 500 + (shoppingBag.cartItems.setB + shoppingBag.cartItems.setC) * 650;
    setTotal(newTotal);
  },[shoppingBag.cartItems.setA, shoppingBag.cartItems.setB, shoppingBag.cartItems.setC])

  return (    
    <div className="spa-content checkout">      
      <h2>購物車</h2>
      <div className="items-checkout">
        {shoppingBag.cartItems.setA ?
          <ItemInList img={setA} amount='6入' price='500元' count={shoppingBag.cartItems.setA} adjustAmount={shoppingBag.adjustAmount} item='setA'/> : null}
        {shoppingBag.cartItems.setB ?
          <ItemInList img={setB} amount='8入' price='650元' count={shoppingBag.cartItems.setB} adjustAmount={shoppingBag.adjustAmount} item='setB'/> : null}
        {shoppingBag.cartItems.setC ?
          <ItemInList img={setC} amount='12入' price='650元' count={shoppingBag.cartItems.setC} adjustAmount={shoppingBag.adjustAmount} item='setC'/>: null}
      </div>
      <hr />
      <p className="total">{total}</p>
      <div className="btns">
        <button disabled>結帳（尚未啟用）</button>
        <button>
          <Link to='/shopping-cart/shop'>繼續購物</Link>
        </button>   
      </div>          
    </div>
  )
};

const ItemInList = (props) => {
  const adjustAmount = useContext(ShoppingBag).adjustAmount;
  const [counts, setCounts] = useState(props.count); 

  const handleChange = (e) => {
    e.preventDefault();
    const newValue = e.target.value || 0;
    setCounts(newValue);
  };

  useEffect(() => {    
    adjustAmount(props.item, counts);
  }, [counts]);


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

  return (
    <div className="itemInList">
      <img src={props.img} alt={props.alt} style={picStyle}/>
      <div style={textStyle}>
        <span>品項：{props.amount}</span>
        <span>價格：{props.price}</span>
        <div>
          <label>數量：</label>
          <select value={counts} onChange={handleChange}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
      </div>
      <button onClick={handleChange} className="remove-item">移除商品</button>
    </div>
  )
}

export default ShoppingList;