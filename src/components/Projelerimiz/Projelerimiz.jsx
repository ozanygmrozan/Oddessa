import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Tilt from "react-parallax-tilt";
import my from "../../Assets/gallery-1.jpg";
import ContactInfo from "../About/Techstack";
import PinterestGallery from "../Resume/PinterestGallery";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const TooltipButton = ({ text }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className="tooltip-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button className={`tooltip-button ${isHovered ? "hovered" : ""}`}>
          {text}
        </button>
        <div className="tooltip">Bu kelimeye dair açıklama</div>
      </div>
    );
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <h1 className="heading-name">
          Tüm
          <strong className="main-name"> Muhteşem </strong>
          Projelerimiz
        </h1>

        <div>
          <TooltipButton text="Hepsi" />
          <TooltipButton text="Mobil" />
          <TooltipButton text="Uygulama Yazılım" />
          <TooltipButton text="Web Dizayn" />
          <TooltipButton text="Ürün Tasarımı" />
        </div>
      </Container>

      <PinterestGallery />
    </div>
  );
}

export default ResumeNew;
