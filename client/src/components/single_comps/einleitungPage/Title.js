import React from "react";
import SunSVG from "./SunSVG";
function Title() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-items-center gap-2">
      <h2 className="font-athiti text-3xl lg:text-5xl">
        Sonne, Wind, Meer und mehr
      </h2>
      <SunSVG />
    </div>
  );
}

export default Title;
