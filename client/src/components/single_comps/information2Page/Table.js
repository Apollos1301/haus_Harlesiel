import React from "react";
import sofa from "../../../assets/svg/sofa.svg";
import herd from "../../../assets/svg/herd.svg";
import dusche from "../../../assets/svg/dusche.svg";
import bett from "../../../assets/svg/bett.svg";
import sonst from "../../../assets/svg/sonst.svg";

function Table() {
  return (
    <>
      <div className="row-start-2 row-end-7 col-start-2 col-end-4 flex flex-col">
        <div className="h-[20%] w-full grid justify-items-center items-center">
          <img src={sofa} alt="" className="h-full mt-2" />
        </div>
        <div className="self-center h-[80%] w-full grid justify-items-start items-start">
          <ul className="ml-5 font-athiti text-[1.2rem]">
            <li className="list-disc mb-3">TV {"(Satellit)"}</li>
            <li className="list-disc mb-3">
              gemütliche Eckcouch <br />
              mit Tisch
            </li>
            <li className="list-disc mb-3">Esstisch mit vier Stühlen</li>
            <li className="list-disc mb-3">Schwingsessel</li>
          </ul>
        </div>
      </div>
      <div className="row-start-2 row-end-7 col-start-4 col-end-6 flex flex-col">
        <div className="h-[20%] w-full grid justify-items-center items-center">
          <img src={herd} alt="" className="h-4/6" />
        </div>
        <div className="self-center h-[80%] w-full grid justify-items-start items-start">
          <ul className="ml-5 font-athiti text-[1.2rem]">
            <li className="list-disc mb-3">Mikrowelle</li>
            <li className="list-disc mb-3">
              Herd mit vier Koch- <br />
              platten und Backofen
            </li>
            <li className="list-disc mb-3">
              Kühlschrank mit <br />
              Gefrierfach
            </li>
            <li className="list-disc mb-3">Filterkaffeemaschine</li>
            <li className="list-disc mb-3">Wasserkocher</li>
            <li className="list-disc mb-3">Toaster</li>
          </ul>
        </div>
      </div>
      <div className="row-start-2 row-end-7 col-start-6 col-end-8 flex flex-col">
        <div className="h-[20%] w-full grid justify-items-center items-center">
          <img src={dusche} alt="" className="h-4/6" />
        </div>
        <div className="self-center h-[80%] w-full grid justify-items-start items-start">
          <ul className="ml-5 font-athiti text-[1.2rem]">
            <li className="list-disc mb-3">WC</li>
            <li className="list-disc mb-3">Dusche</li>
            <li className="list-disc mb-3">Waschmaschine</li>
            <li className="list-disc mb-3">Zusätzliches WC im OG</li>
          </ul>
        </div>
      </div>
      <div className="row-start-2 row-end-7 col-start-8 col-end-10 flex flex-col">
        <div className="h-[20%] w-full grid justify-items-center items-center">
          <img src={bett} alt="" className="h-5/6 mt-2" />
        </div>
        <div className="self-center h-[80%] w-full grid justify-items-start items-start">
          <ul className="ml-5 font-athiti text-[1.2rem]">
            <li className="list-disc mb-3">Doppelbett {"(160 x 200)"}</li>
            <li className="list-disc mb-3">großer Kleiderschrank</li>
            <li className="list-disc mb-3">Ablage</li>
            <li className="list-disc mb-3">Korbsessel</li>
          </ul>
        </div>
      </div>
      <div className="row-start-2 row-end-7 col-start-10 col-end-12 flex flex-col">
        <div className="h-[20%] w-full grid justify-items-center items-center">
          <img src={sonst} alt="" className="h-3/6 mt-2" />
        </div>
        <div className="self-center h-[80%] w-full grid justify-items-start items-start">
          <ul className="ml-5 font-athiti text-[1.2rem]">
            <li className="list-disc mb-3">Bügeleisen</li>
            <li className="list-disc mb-3">Staubsauger</li>
            <li className="list-disc mb-3">privater Parkplatz</li>
            <li className="list-disc mb-3">Reinigungsmittel</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Table;
