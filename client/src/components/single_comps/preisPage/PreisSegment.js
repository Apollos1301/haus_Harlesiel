import React from "react";
import hacken from "../../../assets/svg/haken.svg";
import kreuz from "../../../assets/svg/kreuz.svg";

function PreisSegment() {
  return (
    <div className="w-1/3 grid justify-items-end items-center">
      <div className="ml-4 lg:ml-0 lg:w-10/12 h-3/6 lg:h-5/6 drop-shadow-2xl shadow-2xl border-4 transition hover:scale-105 cursor-pointer bg-white flex flex-col gap-5 font-athiti justify-items-center items-start lg:items-center">
        <div className="text-center pt-5">
          <span className="text-xl lg:text-6xl">90 €</span>
          <span className="text-sm lg:text-2xl">/ Nacht</span>
          <br />
          <span className=" text-sm lg:text-lg">
            Kein Saison-Schnickschnack,
            <br /> ein Preis für das ganze Jahr!
          </span>
        </div>
        <div className="w-5/12 flex flex-col justify-items-start items-start lg:gap-5">
          <div className="flex lg:gap-2 ">
            <img src={hacken} alt="" />
            <p className="text-sm lg:text-xl">Heizung</p>
          </div>
          <div className="flex lg:gap-2 ">
            <img src={hacken} alt="" />
            <p className="text-sm lg:text-xl">Wasser</p>
          </div>
          <div className="flex lg:gap-2 ">
            <img src={hacken} alt="" />
            <p className="text-sm lg:text-xl">Strom</p>
          </div>
          <div className="flex lg:gap-2 ">
            <img src={hacken} alt="" />
            <p className="text-sm lg:text-xl">WLAN</p>
          </div>
          <div className="flex lg:gap-2 ">
            <img src={hacken} alt="" />
            <p className="text-sm lg:text-xl">Endreinigung</p>
          </div>
          <div className="flex lg:gap-2 ">
            <img src={kreuz} alt="" />
            <p className="text-sm lg:text-xl">Handtücher</p>
          </div>
          <div className="flex lg:gap-2 ">
            <img src={kreuz} alt="" />
            <p className="text-sm lg:text-xl">Bettwäsche</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreisSegment;
