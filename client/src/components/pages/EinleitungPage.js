import React from "react";
import Title from "../single_comps/einleitungPage/Title";
import MainText from "../single_comps/einleitungPage/MainText";
function EinleitungPage() {
  return (
    <div className="h-full lg:h-[30rem] flex flex-col items-center justify-items-center">
      <Title />
      <MainText />
      <div className="w-full h-full flex items-center justify-items-center place-content-center">
        <div className="w-[70rem] border-t border-black" />
      </div>
    </div>
  );
}

export default EinleitungPage;
