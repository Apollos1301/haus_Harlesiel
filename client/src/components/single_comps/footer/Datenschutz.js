import React from "react";

function Datenschutz({ setState }) {
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
        <h1>Datenschutzerklärung</h1>

        <p>Datum: {new Date().toLocaleDateString("de-DE")}</p>

        <h2>1. Allgemeines</h2>
        <p>
          Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und halten
          uns strikt an die Regeln der Datenschutzgesetze. Auf dieser Webseite
          werden keinerlei persönliche Daten erhoben, verwendet oder
          weitergeleitet. Die folgenden Erläuterungen geben Ihnen einen
          Überblick darüber, wie wir diesen Schutz gewährleisten und welche Art
          von Daten zu welchem Zweck nicht erhoben werden.
        </p>

        <h2>2. Datenverarbeitung auf dieser Internetseite</h2>
        <p>
          Da es sich bei dieser Webseite um eine statische Seite handelt, werden
          keinerlei persönliche Daten von Ihnen erhoben. Es gibt keine
          Formulare, Cookies, Tracking-Tools oder andere Elemente, die Ihre
          Daten erfassen könnten.
        </p>

        <h2>3. Weitergabe von Daten an Dritte</h2>
        <p>
          Da wir keine Daten erfassen, geben wir auch keine Daten an Dritte
          weiter.
        </p>

        <h2>4. Ihre Rechte</h2>
        <p>
          Sie haben jederzeit das Recht auf Auskunft über die bezüglich Ihrer
          Person gespeicherten Daten, deren Herkunft und Empfänger sowie den
          Zweck der Speicherung. Da wir jedoch keine Daten speichern, gibt es in
          diesem Kontext keine Daten, über die Sie sich informieren könnten.
        </p>

        <h2>5. Änderungen dieser Datenschutzerklärung</h2>
        <p>
          Wir behalten uns vor, diese Datenschutzerklärung in der Zukunft zu
          ändern, sollten sich die Umstände ändern. Bitte prüfen Sie daher
          regelmäßig diese Erklärung.
        </p>

        <h2>6. Kontakt</h2>
        <p>
          Für weitere Fragen zum Datenschutz können Sie sich jederzeit unter{" "}
          <a href="mailto:info@muschelpadd.de">info@muschelpadd.de</a> an uns
          wenden.
        </p>
      </div>
    </div>
  );
}

export default Datenschutz;
