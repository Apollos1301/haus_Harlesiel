import React from "react";
function Footer({ setDatenschutz, setImpressum }) {
  return (
    <div className="h-[3rem] bg-black flex flex-row justify-around text-white items-center">
      <div className="cursor-pointer" onClick={() => setDatenschutz(true)}>
        Datenschutz
      </div>
      <div className="cursor-pointer" onClick={() => setImpressum(true)}>
        Impressum
      </div>
    </div>
  );
}

export default Footer;
