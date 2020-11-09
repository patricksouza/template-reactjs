import React, { Component } from "react";

import { Row, Col } from "react-bootstrap";

import { Link} from "react-router-dom";

//Style
import "../styles/footer.css";

//Assets
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

class Footer extends Component {
  render() {
    return (
      <div className="py-4 footer">
        <div className="container">
          <Row className="d-flex justify-content-between">
            <Col>
              <p className="">
                © 2020 empresa Tecnologia. Todos os Direitos Reservados
              </p>
            </Col>
            <Col className="ml-2" xs={14}>
              <Link style={{color:"#1a87fe"}}><FaFacebook size={16} color="#fffff" /></Link>
            </Col>
            <Col className="ml-2" xs={15}>
              <Link style={{color:"#1a87fe"}}><FaInstagram size={16} color="#fffff" /></Link>
            </Col>
            <Col className="ml-2" xs={16}>
              <Link><FaLinkedin size={16} color="#fffff" /></Link>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Footer;
