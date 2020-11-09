import React, { Component } from "react";

import { Carousel } from "react-bootstrap";

//Style
import "../styles/carousel.css";

//Assets
import img01 from "../../assets/banner/home-banner.png";
class CarouseL extends Component {
  render() {
    return (
      <div className="">
          <h2
          className="text-center font-weight-bold"
          style={{ color: "#0c52bb" }}
        >
          Seção de informações
        </h2>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img01}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img01}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img01}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default CarouseL;
