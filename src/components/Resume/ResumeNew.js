import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Tilt from "react-parallax-tilt";
import my from "../../Assets/gallery-1.jpg";
import m from "../../Assets/gallery-2.jpg";
import mq from "../../Assets/gallery-3.jpg";
import mw from "../../Assets/gallery-4.jpg";
import mf from "../../Assets/gallery-5.jpg";
import mg from "../../Assets/gallery-6.jpg";
import mü from "../../Assets/gallery-7.jpg";
import mğ from "../../Assets/gallery-8.jpg";
import ml from "../../Assets/gallery-9.jpg";
import mç from "../../Assets/gallery-10.jpg"; 
import ContactInfo from "../About/Techstack";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <h1 className="project-heading">
          Galeri <strong className="purple"> ve Medya </strong>
        </h1>
        <Container>
          <hr />

          <Container
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Row>
              <Col md={6}>
                {" "}
                <Tilt>
                  <img
                    src={my}
                    style={{ width: "100%", marginTop: 10 }}
                    alt="avatar"
                  />
                </Tilt>
              </Col>
              <Col md={6}>
                {" "}
                <Tilt>
                  <img
                    src={m}
                    style={{ width: "100%", marginTop: 10 }}
                    alt="avatar"
                  />
                </Tilt>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container>
          <Container
            style={{
              display: "flex",
              marginTop: 20,
              justifyContent: "space-between",
            }}
          >
            <Row>
              <Col md={4}>
                {" "}
                <Tilt>
                  <img
                    src={mq}
                    style={{ width: "100%", marginTop: 10 }}
                    alt="avatar"
                  />
                </Tilt>
              </Col>
              <Col md={4}>
                {" "}
                <Tilt>
                  <img
                    src={mw}
                    style={{ width: "100%", marginTop: 10 }}
                    alt="avatar"
                  />
                </Tilt>
              </Col>
              <Col md={4}>
                {" "}
                <Tilt>
                  <img
                    src={ mf}
                    style={{ width: "100%", marginTop: 10 }}
                    alt="avatar"
                  />
                </Tilt>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container>
          <Container
            style={{
              display: "flex",
              marginTop: 20,
              justifyContent: "space-between",
            }}
          >
            <Row>
              <Col md={4}>
                {" "}
                <Tilt>
                  <img
                    src={mg}
                    style={{ width: "100%", marginTop: 10 }}
                    alt="avatar"
                  />
                </Tilt>
              </Col>
              <Col md={4}>
                {" "}
                <Tilt>
                  <img
                    src={mç}
                    style={{ width: "100%", marginTop: 10 }}
                    alt="avatar"
                  />
                </Tilt>
              </Col>
              <Col md={4}>
                {" "}
                <Tilt>
                  <img
                    src={mü}
                    style={{ width: "100%", marginTop: 10 }}
                    alt="avatar"
                  />
                </Tilt>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container>
          <Container
            style={{
              display: "flex",
              marginTop: 20,
              justifyContent: "space-between",
            }}
          >
            <Row>
              <Col md={6}>
                {" "}
                <Tilt>
                  <img
                    src={mğ}
                    style={{ width: "100%", marginTop: 10 }}
                    alt="avatar"
                  />
                </Tilt>
              </Col>
              <Col md={6}>
                {" "}
                <Tilt>
                  <img
                    src={ml}
                    style={{ width: "100%", marginTop: 10 }}
                    alt="avatar"
                  />
                </Tilt>
              </Col>
            </Row>
          </Container>
        </Container>

        <hr />
        <h1 className="project-heading">
          <strong className="purple">İletişim </strong>
        </h1>
        <ContactInfo />
      </Container>
    </div>
  );
}

export default ResumeNew;
