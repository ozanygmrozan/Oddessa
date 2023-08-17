import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Mobil yazılım",
          "Wep yazılım",
          "Özel yazılım geliştirme",
          "QR ve NFC yazılımı",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 10,
      }}
    />
  );
}

export default Type;
