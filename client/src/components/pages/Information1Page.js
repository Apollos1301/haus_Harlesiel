import React from "react";
import FirstSection from "../single_comps/information1Page/FirstSection";
import SecondSection from "../single_comps/information1Page/SecondSection";
import ThirdSection from "../single_comps/information1Page/ThirdSection";
function Information1Page() {
  return (
    <div className="h-full lg:h-[50rem] flex flex-col items-center justify-items-center">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
}

export default Information1Page;
