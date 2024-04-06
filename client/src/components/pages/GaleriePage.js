import { React, useState } from "react";
import Images from "../single_comps/galeriePage/Images";
import Caroussel from "../single_comps/galeriePage/Caroussel";
function GaleriePage({ myRef }) {
  const [show, setShow] = useState(false);
  const [currIndex, setCurrIndex] = useState(0);
  const controlCaroussel = (currState, index) => {
    setShow(currState);
    setCurrIndex(index);
  };
  return (
    <>
      {show ? (
        <Caroussel setCaroussel={controlCaroussel} currIndex={currIndex} />
      ) : (
        <></>
      )}
      <Images showCaroussel={controlCaroussel} myRef={myRef} />
    </>
  );
}

export default GaleriePage;
