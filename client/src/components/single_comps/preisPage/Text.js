import React from "react";
import edges from "../../../assets/svg/edges.svg";
import useIsMobile from "../../../hooks/useIsMobile";

function Text() {
  const isMobile = useIsMobile();
  return (
    <div className="w-2/3 grid justify-items-center items-center">
      <div className="w-10/12 h-5/6 relative top-0 left-0">
        <img
          src={edges}
          alt=""
          className="w-full h-full absolute top-0 left-0"
        />

        <div className="pl-5 pr-5 w-full h-full absolute top-0 left-0 flex justify-items-center items-center font-athiti text-[1.5rem] text-center">
          <div>
            Für Deinen Aufenthalt zahlst Du pauschal 90 Euro pro Nacht.
            <br />
            Kein Saison-Schnickschnack, ein Preis für das ganze Jahr!
            <br />
            Heizung, Wasser, Strom, WLAN und auch die Endreinigung sind hier
            schon mit dabei, Handtücher und Bettwäsche musst Du Dir allerdings
            selber mitbringen. Infos zum zusätzlich zu zahlenden Gästebeitrag
            findest Du
            <a
              className="text-blue-700"
              href="https://www.die-nordseeküste.de/"
            >
              {" "}
              hier
            </a>
            . Wir bitten Dich um Verständnis, dass Haustiere in unserem Haus
            nicht gestattet sind und
            <br />
            im Haus nicht geraucht werden darf.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Text;
