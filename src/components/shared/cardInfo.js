import React, { Component } from "react";

import {
  Row,
  Col,
  Card,
  Button,

} from "react-bootstrap";

//Style
import "../styles/cardInfo.css";

//Assets
import { FaArrowRight } from "react-icons/fa";

class CardInfo extends Component{
    render(){
        return(
            <Row className="d-flex justify-content-center py-5">
          <Col>
            <Card className="card-info shadow" style={{ width: "20rem" }}>
              <Card.Body>
                <Card.Title
                  className="font-weight-bold"
                  style={{ color: "#747d89" }}
                >
                  O que é um interfone virtual?
                </Card.Title>
                
                <br></br>
                <Card.Text style={{ fontSize: "13px" }}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <div className="d-flex justify-content-start">
                  <Button className="" variant="primary" size="sm" block>
                    Saiba mais
                    <FaArrowRight className="ml-3" size={14} color="#fffff" />
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card-info shadow" style={{ width: "20rem" }}>
              <Card.Body>
                <Card.Title
                  className="font-weight-bold"
                  style={{ color: "#747d89" }}
                >
                  A gestão da telefonia empresarial
                </Card.Title>
          
                <br></br>
                <Card.Text style={{ fontSize: "13px" }}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <div className="d-flex justify-content-start">
                <Button className="" variant="primary" size="sm" block>
                    Saiba mais
                    <FaArrowRight className="ml-3" size={14} color="#fffff" />
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card-info shadow" style={{ width: "20rem" }}>
              <Card.Body>
                <Card.Title
                  className="font-weight-bold"
                  style={{ color: "#747d89" }}
                >
                  A gestão da telefonia empresarial
                </Card.Title>
  
                <br></br>
                <Card.Text style={{ fontSize: "13px" }}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <div className="d-flex justify-content-start">
                <Button className="" variant="primary" size="sm" block>
                    Saiba mais
                    <FaArrowRight className="ml-3" size={14} color="#fffff" />
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        );
    }
}

export default CardInfo;