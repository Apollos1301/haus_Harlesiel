import React, { useRef, useState, useEffect } from "react";
import { useInView, animated, useSpring } from "@react-spring/web";
import ZaunSVG from "./ZaunSVG";
import useIsMobile from "../../../hooks/useIsMobile";
function ThirdSection() {
  const isMobile = useIsMobile();
  const [ref, springs] = useInView(
    () => ({
      from: isMobile
        ? { opacity: 0 }
        : {
            opacity: 0,
            transform: "translate(600px, 0)",
          },
      to: isMobile
        ? { opacity: 1 }
        : {
            opacity: 1,
            transform: "translate(0, 0)",
          },
      config: { duration: 800 },
    }),
    { once: true, rootMargin: isMobile ? "0% 0px 0% 0px" : "-10% 0px -10% 0px" }
  );
  return (
    <animated.div
      ref={ref}
      style={springs}
      className="h-1/3 w-full flex flex-col lg:flex-row justify-items-center items-center place-content-center gap-[1rem] lg:gap-[10rem] overflow-hidden"
    >
      <ZaunSVG />
      <p className="font-athiti text-sm lg:text-2xl text-center">
        Möchtest Du etwas Frischluft tanken, kannst Du dies
        <br className="hidden lg:inline" /> auf der Terrasse machen, welche
        direkt an das
        <br className="hidden lg:inline" /> Wohnzimmer angrenzt.
      </p>
    </animated.div>
  );
}

export default ThirdSection;
