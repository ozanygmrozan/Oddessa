import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Odessa Yazılım ve <span className="purple"> Danışmanlık </span>
            </h1>
            <p className="home-about-body">
              Odessa Yazılım, öncü bir yazılım şirketi olarak sektördeki güçlü
              duruşuyla tanınır. Müşteri odaklı yaklaşımı ve yenilikçi
              çözümleriyle Odessa Yazılım, işletmelerin🤷‍♂️dijital dönüşümünü
              hızlandırıyor. .
              <br />
              <br />
              Odessa Yazılım, kaliteli yazılım ürünleri ve hizmetleri sunarak
              müşteri memnuniyetini en üst düzeyde tutmayı hedefliyor. Uzman
              yazılım mühendisleri ve
              <i>
                <b className="purple">
                  tasarımcılarından oluşan yetenekli ekibi, projeleri zamanında
                  ve bütçeye uygun bir şekilde tamamlamak için sürekli olarak
                  yenilikçi yöntemler ve en son teknolojileri kullanıyor.{" "}
                </b>
              </i>
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Sosyal Medya</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/odessayazilim/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
