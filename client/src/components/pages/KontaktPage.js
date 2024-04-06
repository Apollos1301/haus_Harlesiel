import React from "react";
function KontaktPage({ myRef }) {
  return (
    <div
      ref={myRef}
      className="h-[40rem] bg-[#BFD0E3] flex flex-col pt-10 gap-5 justify-items-center items-center"
    >
      <div className="flex flex-col justify-items-center items-center gap-5">
        <h2 className="lg:text-2xl lg:text-4xl font-athiti">
          Hier kannst Du uns erreichen:{" "}
          <a
            href="mailto:info@muschelpadd.de"
            className="text-blue-700 font-semibold"
          >
            info@muschelpadd.de
          </a>
        </h2>
        <div className="w-2/3 border-black border-t " />
        <div className="w-3/6 border-black border-t " />
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d37794.71347936325!2d7.811939!3d53.697424!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b67d09a280201d%3A0x7f21f26b84caa19b!2sMuschelpadd%2052%2C%2026409%20Wittmund!5e0!3m2!1sde!2sde!4v1698142965798!5m2!1sde!2sde"
        className="h-[80%] w-[95%] border-2 drop-shadow-2xl shadow-2xl"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default KontaktPage;
