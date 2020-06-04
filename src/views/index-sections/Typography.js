import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Typography() {
  return (
    <>
      <div className="section">
        <Container>
          
          <div id="typography">
            <Row>
              <Col md="12">
                <div className="typography-line">
                  
                </div>
                <div className="typography-line">
                  <h2>
                    The Life of Now UI Kit
                  </h2>
                </div>
                <div className="typography-line">
                 
                </div>
                <div className="typography-line">
                 
                </div>
              
                <div className="typography-line">
                  <p>
                  Si ganáramos,  HIGH DRONE  invertiría en el desarrollo y aplicación de tecnologías a los protipos de drones,
                  adaptándolos a las necesidades dadas por la industria y comunidad, así como
                  infraestructura, herramientas y recurso humano para democratizar la tecnología drone haciéndola accesible
                  a las áreas de aplicación, asi como la promoción para el crecimiento de la empresa y dar a conocer los beneficios
                 de su aplicacion para la industria, comunidad y el medio ambiente.

                  </p>
                </div>
                <div className="typography-line">

                  <blockquote>
                    <p className="blockquote blockquote">
                      "Una empresa tecnológica cuyo objetivo es desarrollar y contribuir en las áreas de
                       la industria 4.0  a través de la automatización de drones."{" "}
                      <br></br>
                      <br></br>
                      <small>- Noaa</small>
                    </p>
                  </blockquote>
                </div>
             
                <div className="typography-line">
                  <h2>
                    Header with small subtitle <br></br>
                    <small>Use "small" tag for the headers</small>
                  </h2>
                </div>
              </Col>
            </Row>
          </div>
          <div className="space-50"></div>
          <div id="images">
            <h4>Images</h4>
            <Row>
              <Col sm="2">
                <p className="category">Contadora: Jaquelin Vargas</p>
                <img
                  alt="..."
                  className="c"
                  src={require("assets/img/jaquelin.jpg")}
                ></img>
              </Col>
              <Col sm="2">
                <p className="category">CTO: Miguel Baños</p>
                <img
                  alt="..."
                  className="miguel.png"
                  src={require("assets/img/miguel.jpg")}
                ></img>
              </Col>
              <Col sm="2">
                <p className="category">CEO: Ing.Luis Lechuga</p>
                <img
                  alt="..."
                  className="rounded img-raised"
                  src={require("assets/img/luis.jpg")}
                ></img>
              </Col>
              <Col sm="2">
                <p className="category">Circle Raised</p>
                <img
                  alt="..."
                  className="rounded-circle img-raised"
                  src={require("assets/img/julie.jpg")}
                ></img>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Typography;
