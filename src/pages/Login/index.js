import React, { useState } from "react";

//Api
import api from "../../sevices/api";

//Dependencias
import "bootstrap/dist/css/bootstrap.min.css";

//components
import Footer from "../../components/shared/footer.js";
import PreFooter from "../../components/shared/prefooter.js";
import CardInfo from "../../components/shared/cardInfo.js";
import { Link, useHistory } from "react-router-dom";

//Style
import "./styles.css";
import {
  Navbar,
  Row,
  Col,
  Card,
  Button,
  Form,
} from "react-bootstrap";

//Assets
//import logoIndex from "../../assets/logo_index.png";


function Login() {
  const [name, setName] = useState("") ?? null;
  const [pass, setPass] = useState("") ?? null;

  const history = useHistory();
  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await api.post("session", { name }, { pass });
      //console.log(response.data.name);
      localStorage.setItem("setName", name);
      localStorage.setItem("setPass", pass);

      localStorage.setItem("users", response.data.name);
      history.push("/profile");
    } catch (err) {
      alert("Falha ao logar.");
    }
  }

  return (
    <div className="">
      <div id="first-half">
        <Navbar className="container justify-content-between">
          {/* <img className="img-size" src={logoIndex} alt="logo" /> */}
          <div className="link-group">
            <Row>
              <Col xs={3}>
                <Link className="link">XXX</Link>
              </Col>
              <Col xs={4}>
                <Link className="link">XXXX</Link>
              </Col>
              <Col xs={5}>
                <Link className="link">XXXX</Link>
              </Col>
            </Row>
          </div>
        </Navbar>

        <div className="container-fluid py-5">
          <Row className="d-flex justify-content-center py-5">
            <Col xs={8}>
              <div className="text-white p-5">
                <h2>
                  Tecnologias que aproximam<br></br> pessoas e negócios
                </h2>
                <p className="text-grey py-3" style={{ fontSize: "13px" }}>
                XXXXXXXXXXXXXXXX
                </p>
              </div>
            </Col>
            <Col xs={3}>
              <Card className="card-custom shadow" style={{ width: "23rem" }}>
                <Card.Body>
                  <Card.Title className="text-center font-weight-light text-dark">
                    Bem-vindo à Intranet!
                  </Card.Title>
                  <hr></hr>
                  <br></br>
                  <Form onSubmit={handleLogin}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control
                        className="input-bottom"
                        type="text"
                        name="user"
                        placeholder="Usuário"
                      />
                      <Form.Text
                        className="text-dark"
                        style={{ fontSize: "11px" }}
                      >
                        Primeiro e último nome
                      </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Control
                        className="input-bottom"
                        type="password"
                        name="pass"
                        placeholder="Senha"
                      />
                    </Form.Group>
                    <Button
                      className=""
                      style={{backgroundColor:"#0e81ff"}}
                      variant="primary"
                      type="submit"
                      block
                    >
                      Entrar
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    
      <div className="container py-5">
        <div class="d-flex justify-content-center">
          <h6 class="subTitle">Importante para se informar!</h6>
        </div>
        <h2
          className="text-center font-weight-bold"
          style={{ color: "#1a87fe" }}
        >
          Seção de informações
        </h2>
        <CardInfo/>
      </div>
      <PreFooter className="shadow" />
      <Footer id="sticky-footer" />
    </div>
  );
}

export default Login;
