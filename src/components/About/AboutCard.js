import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card
      className="quote-card-view"
      /* style={{ display: "flex", flexDirection: "row", marginLeft: 10 }} */
    >
      <p>
        Misyonumuz, müşterilerimize en son teknolojileri kullanarak yenilikçi ve
        yüksek kaliteli yazılım çözümleri sunmak ve onların işlerini daha
        verimli hale getirmelerine yardımcı olmaktır. Müşteri odaklı
        yaklaşımımızla, işbirliği ve şeffaflık ilkelerini benimseyerek,
        müşterilerimizin beklentilerini en üst düzeyde karşılamayı hedefliyoruz.
      </p>
      <p>
        Vizyonumuz, bölge genelinde en iyi yazılım firmaları arasında yer
        alarak, müşterilerimize her zaman en yüksek kalitede hizmeti sunmaktır.
        Yenilikçi ve öncü projelere imza atarak, sektörde lider konumda olmayı
        hedefliyoruz. Aynı zamanda, çalışanlarımızın gelişimine ve mutluluğuna
        önem vererek, onların şirketimize olan bağlılığını artırmak istiy
      </p>
    </Card>
  );
}

export default AboutCard;
