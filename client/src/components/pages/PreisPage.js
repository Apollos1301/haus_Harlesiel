import React from "react";
import PreisSegment from "../single_comps/preisPage/PreisSegment";
import Text from "../single_comps/preisPage/Text";
import PreisSegmentMobile from "../single_comps/preisPage/PreisSegmentMobile";
import TextMobile from "../single_comps/preisPage/TextMobile";

import useIsMobile from "../../hooks/useIsMobile";

function PreisPage({ myRef }) {
  const isMobile = useIsMobile();
  return (
    <div
      ref={myRef}
      className="h-[40rem] flex flex-col lg:flex-row w-full bg-gradient-to-b from-white  to-[#BFD0E3]"
    >
      {isMobile ? (
        <>
          <PreisSegmentMobile />
          <TextMobile />
        </>
      ) : (
        <>
          <PreisSegment />
          <Text />
        </>
      )}
    </div>
  );
}

export default PreisPage;
