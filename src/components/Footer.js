import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

import { FaLinkedinIn } from "react-icons/fa";
import logo from "../Assets/logo.png";
import "./Footer.css";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="3" className="footer-copywright">
          <img
            src={logo}
            className="img-fluid logo"
            style={{ maxWidth: "250px", height: "auto" }}
            alt="brand"
          />

          <p>info@odessayazilim.com</p>
          <p>0 543 432 65 65</p>
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://twitter.com/i/flow/login?redirect_after_login=%2Fodessayazilim"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.facebook.com/Odessayazilim/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/odessayazilim/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
        <Col md="3" className="footer-copywright">
          <h2 style={{ color: "white" }}>Bağlantılar</h2>
          <p>Hakkımızda</p>
          <p>Hizmetlerimiz</p>
          <p>Fiyatlandırma</p>
          <p>Projelerimiz</p>
          <h3> {year} </h3>
        </Col>{" "}
        <Col md="3" className="footer-copywright">
          <h2 style={{ color: "white" }}>Sayfalar</h2>
          <p>İletişim</p>
          <p>KVKK ve Aydınlatma Metni</p>
          <p>Sıkça Sorulan Sorular</p>
          <p>Kullanım Şartları</p>
          <p>Gizlilik Politikası</p>
        </Col>
        <Col md="3" className="footer-body">
          <h2 style={{ color: "white" }}>Bültenimize Abone Olun</h2>
          <input
            placeholder="Email adresiniz"
            style={{
              height: 70,
              borderRadius: 20,
              color: "white",
              zIndex: 20,
              width: "70%",
              backgroundColor: "#2e2141",
              padding: "0 15px",
            }}
            name="lastName"
          />
          <div className="footer-subscribe">
            <div className="subscribe-input">
              <button
                style={{
                  height: 60,
                  width: 320,
                  borderRadius: 20,
                  marginTop: 20,
                }}
              >
                Abone olun
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
