import React from "react";

function Impressum({ setState }) {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-screen bg-white"
      style={{
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
      }}
    >
      <div
        className="ml-10 mt-5 cursor-pointer"
        onClick={() => setState(false)}
      >
        <u>zurück</u>
      </div>
      <br />
      <div className="p-10">
        <h1>Impressum</h1>
        <br />
        <h2>Angaben gemäß § 5 TMG:</h2>
        <br />
        <p>
          M. Sommerstange
          <br />
          Rodderweg 16
          <br />
          50999 Köln
        </p>
        <br />
        <h2>Kontakt:</h2>
        <p>
          E-Mail: <a href="info@muschelpadd.de">info@muschelpadd.de</a>
        </p>
        <br />
        <h2>Verantwortlich für den Inhalt:</h2>
        <p>M. Sommerstange</p>
        <br />
        <h2>Haftungshinweis:</h2>
        <p>
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte
          übernehmen wir keine Gewähr.
        </p>
      </div>
    </div>
  );
}

export default Impressum;
