import React from "react";
import Button from "react-bootstrap/Button";

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
      <p className="mt-3">{props.amount}</p>
      <p>{props.price}</p>
      <Button variant="success" className={props.set} onClick={props.click}>加入購物車</Button>
    </div>
  )
};

export default Item;