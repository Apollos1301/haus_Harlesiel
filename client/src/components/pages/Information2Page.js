import React from "react";
import BackgroundComp from "../single_comps/information2Page/BackgroundComp";
import Title from "../single_comps/information2Page/Title";
import Table from "../single_comps/information2Page/Table";
import TableMobile from "../single_comps/information2Page/TableMobile";
import useIsMobile from "../../hooks/useIsMobile";

function Information2Page({ myRef }) {
  const isMobile = useIsMobile();
  return (
    <div ref={myRef} className="h-[40rem]">
      <div className="mt-[0rem] lg:mt-[10rem] relative top-0 left-0 bg-slate-500 h-full">
        <BackgroundComp />
        <div className="absolute top-0 left-0 w-full h-screen grid grid-rows-6 grid-cols-12">
          <Title />
          {isMobile ? <TableMobile /> : <Table />}
        </div>
      </div>
    </div>
  );
}

export default Information2Page;
