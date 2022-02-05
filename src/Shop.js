import React from "react";
import Item from "./component/item";
import setA from "./component/setA.png";
import setB from "./component/setB.png";
import setC from "./component/setC.png";
import { Container, Row, Col } from "react-bootstrap";

const Shop = (props) => {
  const itemsStyle = {
    display: 'flex',
    flexFlow: 'wrap',
    gap: '10%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const style = {
    height: '66vh',
  }

  return (
    <div className="page d-flex flex-column align-items-center pt-5" style={style}>
      <h1>銷售方式</h1>
      <p className="fs-3">每箱鳳梨的數量，以下費用皆含宅配運費</p>
      <br />
      <Container fluid className="items" style={itemsStyle}>
        <Row className="gy-xs-20 gx-20 w-100 justify-content-center">
          <Col xs="12" md="3">
            <Item img={setA} amount='每顆約3台斤' price='500元' set="setA" click={props.click}/> 
          </Col>
          <Col xs="12" md="3">
            <Item img={setB} amount='每顆約3台斤' price='650元' set="setB" click={props.click}/> 
          </Col>
          <Col xs="12" md="3">
            <Item img={setC} amount='每顆約2台斤' price='650元' set="setC" click={props.click}/> 
          </Col>
        </Row>      
      </Container>
    </div>
  );
};

export default Shop;