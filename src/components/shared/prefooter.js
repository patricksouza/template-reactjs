import React, { Component } from "react";

import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";


//Style
import "../styles/prefooter.css";

//import axPreFooter from "../../assets/footerLogo.svg";

class PreFooter extends Component {
  render() {
    return (
      <div className="py-4 prefooter">
        <div className="container">
          <Row className="d-flex justify-content-between">
            <Col>
              {/* <img className="img-footer" src={axPreFooter} alt="logofooter"/> */}
              <p className="py-5">
                TEXTO
              </p>
            </Col>
            <Col className="ml-4 py-5" xs={14}>
              <ul className="list" style={{ listStyle: "none" }}>
                <li><p className="font-weight-bold" style={{fontSize:'17px'}}>Produtos</p></li>
                <li><Link style={{textDecoration:"none"}}>XXX</Link></li>
                <li><Link style={{textDecoration:"none"}}>XXX</Link></li>
              </ul>
            </Col>
            <Col className="ml-4 py-5" xs={15}>
              <ul className="list" style={{ listStyle: "none" }}>
                <li><p className="font-weight-bold" style={{fontSize:'17px'}}>Empresa</p></li>
                <li><Link style={{textDecoration:"none"}}>Sobre</Link></li>
                <li><Link style={{textDecoration:"none"}}>Valores</Link></li>
                <li><Link style={{textDecoration:"none"}}>Social</Link></li>
                <li><Link style={{textDecoration:"none"}}>Blog</Link></li>
              </ul>
            </Col>
            <Col className="ml-4 py-5" xs={16}>
              <ul className="list" style={{ listStyle: "none" }}>
                <li><p className="font-weight-bold" style={{fontSize:'17px'}}>Suporte</p></li>
                <li><Link style={{textDecoration:"none"}}>Contato</Link></li>
                <li><Link style={{textDecoration:"none"}}>WhatsApp</Link></li>
                <li><Link style={{textDecoration:"none"}}>Minha empresa</Link></li>
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default PreFooter;
