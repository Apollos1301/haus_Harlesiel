import React, { useState, useEffect, useRef } from "react";
import { useInView, animated, useSpring, easings } from "@react-spring/web";
import SingleImage from "./SingleImage";
import img1 from "../../../assets/pictures/galerie/image9-min.jpg";
import img2 from "../../../assets/pictures/galerie/image15-min.jpg";
import img3 from "../../../assets/pictures/galerie/image2-min.jpg";
import img4 from "../../../assets/pictures/galerie/image12-min.jpg";
import img5 from "../../../assets/pictures/galerie/image6-min.jpg";
import img6 from "../../../assets/pictures/galerie/image13-min.jpg";
import img7 from "../../../assets/pictures/galerie/image4-min.jpg";

function Images({ showCaroussel, myRef }) {
  return (
    <div
      ref={myRef}
      className="mt-[20rem] lg:mt-0 h-[60rem] w-full grid grid-cols-3 grid-rows-4 lg:grid-cols-12 lg:grid-rows-6"
    >
      <SingleImage
        classDiv="row-start-1 row-end-2 col-start-1 col-end-2 lg:row-start-1 lg:row-end-4 lg:col-start-1 lg:col-end-5 grid place-content-center justify-items-end w-full h-full"
        classImg="mt-[5rem] lg:w-11/12 shadow-2xl border-4 transition hover:scale-105 cursor-pointer"
        duration={500}
        image={img1}
        showCaroussel={showCaroussel}
        indx={8}
        rootMargin={"-15% 0px -15% 0px"}
      />
      <SingleImage
        classDiv="row-start-1 row-end-2 col-start-2 col-end-3 lg:row-start-4 lg:row-end-7 lg:col-start-1 lg:col-end-4 grid place-content-center justify-items-center w-full h-full"
        classImg="lg:ml-10 shadow-2xl border-4 transition hover:scale-105 cursor-pointer"
        duration={1500}
        image={img2}
        showCaroussel={showCaroussel}
        indx={14}
        rootMargin={"35% 0px 35% 0px"}
      />
      <SingleImage
        classDiv="row-start-1 row-end-2 col-start-3 col-end-4 lg:row-start-1 lg:row-end-4 lg:col-start-5 lg:col-end-9 grid place-content-center justify-items-center lg:w-full lg:h-full"
        classImg="lg:h-[25rem] shadow-2xl border-4 transition hover:scale-105 cursor-pointer"
        duration={1500}
        image={img3}
        showCaroussel={showCaroussel}
        indx={1}
        rootMargin={"-15% 0px -15% 0px"}
      />

      <SingleImage
        classDiv="row-start-2 row-end-3 col-start-1 col-end-2 lg:row-start-4 lg:row-end-5 lg:col-start-3 lg:col-end-9 grid lg:place-content-center justify-items-center lg:items-end w-full h-full"
        classImg="lg:h-[15rem] lg:-mb-[5rem] lg:ml-5 shadow-2xl border-4 transition hover:scale-105 cursor-pointer"
        duration={500}
        image={img4}
        showCaroussel={showCaroussel}
        indx={11}
        rootMargin={"5% 0px 5% 0px"}
      />

      <SingleImage
        classDiv="row-start-2 row-end-3 col-start-2 col-end-3 lg:row-start-5 lg:row-end-7 lg:col-start-5 lg:col-end-9 grid justify-items-center lg:items-end w-full h-full"
        classImg="lg:h-[15rem] lg:mr-[5rem] lg:mt-[8rem] shadow-2xl border-4 transition hover:scale-105 cursor-pointer"
        duration={2000}
        image={img5}
        showCaroussel={showCaroussel}
        indx={5}
        rootMargin={"5% 0px 5% 0px"}
      />

      <SingleImage
        classDiv="row-start-2 row-end-3 col-start-3 col-end-4 lg:row-start-1 lg:row-end-4 lg:col-start-9 lg:col-end-13 grid justify-items-center lg:items-end w-full h-full"
        classImg="lg:h-[25rem] shadow-2xl border-4 transition hover:scale-105 cursor-pointer"
        duration={500}
        image={img6}
        showCaroussel={showCaroussel}
        indx={12}
        rootMargin={"-15% 0px -15% 0px"}
      />

      <SingleImage
        classDiv="row-start-3 row-end-4 col-start-2 col-end-3 lg:row-start-3 lg:row-end-7 lg:col-start-8 lg:col-end-13 grid lg:justify-items-center items-start lg:items-center w-full h-full"
        classImg="lg:h-[18rem] -mt-[7rem] lg:mt-[7rem] lg:ml-5 shadow-2xl border-4 transition hover:scale-105 cursor-pointer"
        duration={1500}
        image={img7}
        showCaroussel={showCaroussel}
        indx={3}
        rootMargin={"5% 0px 5% 0px"}
      />
    </div>
  );
}

export default Images;
