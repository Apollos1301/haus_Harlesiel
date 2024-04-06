import React from "react";
import BackgroundComp from "../single_comps/startPage/BackgroundComp";
import Title from "../single_comps/startPage/Title";
import Button from "../single_comps/startPage/Button";
import WaveSVG from "../single_comps/startPage/WaveSVG";
function StartPage({ buttonClick, myRef }) {
  return (
    <div ref={myRef} className="w-full h-screen relative top-0 left-0">
      <BackgroundComp />
      <div className=" absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center">
        <div className="w-full mb-10 lg:mb-0 lg:w-5/6">
          <Title />
        </div>
        <Button buttonClick={buttonClick} />
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <WaveSVG />
      </div>
    </div>
  );
}

export default StartPage;
