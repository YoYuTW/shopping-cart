import React from "react";

const Item = (props) => {
  const itemStyle = {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const picStyle = {
    width: '15vh',
    height: '15vh',
  }

  return (
    <div className="item" style={itemStyle}>
      <img src={props.img} alt={props.alt} style={picStyle}/>
      <p>{props.amount}</p>
      <p>{props.price}</p>
      <button>加入購物車</button>
    </div>
  )
};

export default Item;