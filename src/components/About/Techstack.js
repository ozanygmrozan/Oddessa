import React from "react";

const ContactInfo = () => {
  return (
    <div
      className="contact-info"
      style={{
        display: "flex",
        flexDirection: "row", 
        justifyContent: "space-between", 
        margin: "50px auto",
        maxWidth: "800px",
        flexWrap: "wrap", 
      }}
    >
      <div className="contact-detail" style={{ marginBottom: "20px", flexBasis: "45%" }}>
        <h2 style={{ color: "#8a49a8", fontSize: "1.25rem" }}>Telefon</h2>
        <p>0 543 432 65 65</p>
      </div>
      <div className="contact-detail" style={{ marginBottom: "20px", flexBasis: "45%" }}>
        <h2 style={{ color: "#8a49a8", fontSize: "1.25rem" }}>Email</h2>
        <p>info@odessayazilim.com</p>
      </div>
      <div className="contact-detail" style={{ marginBottom: "20px", flexBasis: "45%" }}>
        <h2 style={{ color: "#8a49a8", fontSize: "1.25rem" }}>Teknik Destek</h2>
        <p>0 552 399 64 65</p>
      </div>
      <div className="contact-detail" style={{ marginBottom: "20px", flexBasis: "45%" }}>
        <h2 style={{ color: "#8a49a8", fontSize: "1.25rem" }}>Adres</h2>
        <p>
          Şerefiye, Haydaroğlu İş Merkezi, Santral 6. Sk D:Kat:4 No:36, 65100
          İpekyolu/Van
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
