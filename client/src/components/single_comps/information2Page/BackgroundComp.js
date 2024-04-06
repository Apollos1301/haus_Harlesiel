import React from "react";
import backgroundIMG from "../../../assets/pictures/backgrounds/20210421_173005.jpg";

function BackgroundComp() {
  return (
    <>
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `url(${backgroundIMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white via-white/60 to-white" />
    </>
  );
}

export default BackgroundComp;
