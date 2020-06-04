import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function NucleoIcons() {
  return (
    <>
      <div className="section section-nucleo-icons">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <h2 className="title">¿Quíenes somos?</h2>
              <h5 className="description">
              Somos una empresa tecnológica innovadora que aporta soluciones a las necesidades
               actuales de la industria, mediante el desarrollo de drones generando en nosotros
               una responsabilidad al tener la oportunidad de crear soluciones y fuentes de desarrollo
                económico a beneficio de la comunidad, teniendo la satisfacción de aportar nuestros 
                conocimientos e impactar en la sociedad y al medio ambiente siendo nuestros productos amigables 
                y sustentables con la optimización de los servicios actuales.

              </h5>
              <Button
                className="btn-round mr-1"
                color="info"
                href="/nucleo-icons"
                size="lg"
                target="_blank"
              >
                Escribenos
              </Button>
              <Button
                className="btn-round"
                color="info"
                href=""
                outline
                size="lg"
                target="_blank"
              >
                View All Icons
              </Button>
            </Col>
            <Col lg="6" md="12">
              <div className="icons-container">
                <img src="https://i.postimg.cc/Mp3rH9CM/equipo.jpg"></img>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default NucleoIcons;
