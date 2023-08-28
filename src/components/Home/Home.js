import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import myImg from "../../Assets/odessa-logo.png";
import my from "../../Assets/about.png";
import Home2 from "./Home2";
import Type from "./Type";
import Toolstack from "../About/Toolstack";
import ContactInfo from "../About/Techstack";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col lg={7} md={12} className="home-header">
              {" "}
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Merhaba!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                En İyi Bilişim Çözümlerini
                <strong className="main-name"> Üretiyoruz</strong>
              </h1>
              <div
                style={{ padding: 20, marginBottom: "50px", textAlign: "left" }}
              >
                {" "}
                <Type />
              </div>
            </Col>

            <Col lg={5} md={12} style={{ textAlign: "center" }}>
              <div className="img">
                <img
                  src={myImg}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className="about-section">
        <Container>
          <hr />
          <h1 className="project-heading">
            <strong className="purple">İletişim </strong>
          </h1>

          <ContactInfo />

          <hr />
          <Home2 />

          <Container className="home-content">
            <Row>
              {" "}
              <hr />
              <h1 className="project-heading">
                <strong className="purple">
                  Sizden her zaman haber almak istiyoruz
                </strong>
              </h1>
              <Col
                lg={5}
                md={12}
                style={{ textAlign: "center", marginTop: 50 }}
              >
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
        </Container>
      </Container>
    </section>
  );
}

export default Home;
