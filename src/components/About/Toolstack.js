import React from "react";
import { Col, Row } from "react-bootstrap";

function Toolstack() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "50px",
        margin: 20,
        flexWrap: "wrap",
      }}
    >
      <Col
        xs={12}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: 10,
        }}
      >
        <input
          placeholder="Adınız"
          style={{
            color: "white",
            height: 50,
            borderRadius: 20,
            width: "100%",
            marginBottom: 10,
            zIndex: 20,
            backgroundColor: "#110d19",
            padding: "0 15px",
          }}
          name="firstName"
        />
        <input
          placeholder="Soyadınız"
          style={{
            height: 50,
            borderRadius: 20,
            color: "white",
            zIndex: 20,
            width: "100%",
            backgroundColor: "#110d19",
            padding: "0 15px",
          }}
          name="lastName"
        />
      </Col>
      <Col
        xs={12}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: 5,
        }}
      >
        <input
          placeholder="Email adresiniz"
          style={{
            color: "white",
            borderRadius: 20,
            zIndex: 20,
            height: 50,
            width: "100%",
            marginBottom: 10,
            backgroundColor: "#110d19",
            padding: "0 15px",
          }}
          name="email"
        />
        <input
          placeholder="Telefonunuz"
          style={{
            height: 50,
            borderRadius: 20,
            zIndex: 20,
            color: "white",
            width: "100%",
            backgroundColor: "#110d19",
            padding: "0 15px",
          }}
          name="phoneNumber"
        />
      </Col>
      <Col
        xs={12}
        style={{ display: "flex", justifyContent: "center", margin: "15px 0" }}
      >
        <textarea
          style={{
            width: "100%",
            backgroundColor: "#110d19",
            height: 150,
            color: "white",
            borderRadius: 20,
            zIndex: 20,
            border: "none",
            padding: 10,
          }}
          placeholder="Mesajınızı yazınız..."
        ></textarea>
      </Col>{" "}
      <div className="footer-subscribe">
        <div className="subscribe-input">
          <button
            style={{
              height: 60,
              width: 250,
              borderRadius: 20,
              marginTop: 20,
            }}
          >
            Mesajı Gönder
          </button>
        </div>
      </div>
    </Row>
  );
}

export default Toolstack;
