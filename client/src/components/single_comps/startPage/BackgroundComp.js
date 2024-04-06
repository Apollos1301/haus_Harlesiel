import React from "react";
import backgroundIMG from "../../../assets/pictures/backgrounds/bgTop.jpg";

function BackgroundComp() {
  return (
    <>
      <div
        className="absolute top-0 left-0 w-full h-screen"
        style={{
          backgroundImage: `url(${backgroundIMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="absolute top-0 left-0 w-full h-screen bg-[#797261]/60" />
    </>
  );
}

export default BackgroundComp;
