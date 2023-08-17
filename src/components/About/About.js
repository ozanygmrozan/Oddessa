import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import my from "../../Assets/about.png";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Vizyonumuz <strong className="purple">Misyonumuz</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <hr />
        <h1 className="project-heading">
           <strong className="purple">İletişim </strong>
        </h1>

        <Techstack />

        <Container className="home-content">
          <Row>
            {" "}
            <hr />
            <h1 className="project-heading">
              <strong className="purple">
                Sizden her zaman haber almak istiyoruz
              </strong>
            </h1>
            <Col lg={5} md={12} style={{ textAlign: "center", marginTop: 50 }}>
              <img
                src={my}
                alt="home pic"
                className="img-fluid"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Col>
            <Col lg={7} md={12} className="home-header">
              <Toolstack />
            </Col>
          </Row>
        </Container>

        <Github />
      </Container>
    </Container>
  );
}

export default About;
