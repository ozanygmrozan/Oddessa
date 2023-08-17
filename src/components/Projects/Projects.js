import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import chatify from "../../Assets/services-1.jpg";

import bitsOfCode from "../../Assets/services-2.jpg";

import editor from "../../Assets/services-3.jpg";

import leaf from "../../Assets/services-4.jpg";

import suicide from "../../Assets/services-5.jpg";

import emotion from "../../Assets/services-6.jpg";

import emotions from "../../Assets/services-8.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          En İyi Kaliteyi Sunuyoruz{" "}
          <strong className="purple"> Hizmetler </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Yazılım Geliştirici"
              description="3 yılı aşkın süredir yazılım geliştirme alanında dünya genelinde çözümler sunan bir şirketiz."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Mobil Uygulama"
              description="Mobil uygulama geliştirme konusunda uzmanız ve başarılı projelere imza atıyoruz."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
               imgPath={editor}
              isBlog={false}
              title="Web Geliştirme"
              description="Web geliştirme konusunda uzman ekibimizle birlikte, modern web siteleri oluşturuyoruz."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Sosyal Medya Hizmeti"
              description="Sosyal medya hizmetlerimizle markanızı güçlendiriyoruz. Uzman ekibimiz, stratejik planlama ve içerik yönetimiyle hedef kitlenize ulaşmanızı sağlıyor."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="SEO Hizmeti"
              description="SEO hizmetlerimizle web sitenizi üst sıralara taşıyoruz. Uzmanlarımız, arama motoru optimizasyonu stratejileriyle web trafiğinizi artırmanıza yardımcı oluyor."
              //  ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Ürün Tasarımı"
              description="Ürün tasarımı konusunda uzman ekibimiz, yenilikçi ve kullanıcı odaklı tasarımlarla müşterilerimize benzersiz ürün deneyimleri sunuyor."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="QR Kod ve NFC Yazılımı"
              description="QR ve NFC hizmetlerimizle müşterilerimize etkileşimli deneyimler sunuyoruz. Ürünlerinizde veya kampanyalarınızda QR kodları ve NFC etiketlerini kullanarak kullanıcıları hedeflenen içeriklere yönlendiriyoruz."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotions}
              isBlog={false}
              title="Danışmanlık Hizmeti"
              description="Danışmanlık hizmetlerimizle müşterilerimize iş stratejileri, süreç iyileştirmeleri ve verimlilik artışı konularında uzmanlık sağlıyoruz. İhtiyaçlarınıza özel çözümler sunarak işletmenizin başarısını destekliyoruz."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
