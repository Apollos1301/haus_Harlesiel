import React, { useRef, useState, useEffect } from "react";
import { useInView, animated, useSpring } from "@react-spring/web";
import HausSVG from "./HausSVG";
import useIsMobile from "../../../hooks/useIsMobile";
function SecondSection() {
  const isMobile = useIsMobile();
  const [ref, springs] = useInView(
    () => ({
      from: isMobile
        ? { opacity: 0 }
        : {
            opacity: 0,
            transform: isMobile
              ? "translate(600px, 0)"
              : "translate(-600px, 0)",
          },
      to: isMobile
        ? { opacity: 1 }
        : {
            opacity: 1,
            transform: "translate(0, 0)",
          },
      config: { duration: 800 },
    }),
    {
      once: true,
      rootMargin: isMobile ? "0% 0px 0% 0px" : "-20% 0px -20% 0px",
    }
  );
  return (
    <animated.div
      ref={ref}
      style={springs}
      className="h-1/3 w-full flex flex-col lg:flex-row justify-items-center items-center place-content-center gap-[1rem] lg:gap-[10rem] overflow-hidden"
    >
      {isMobile ? <HausSVG /> : <></>}
      <p className="font-athiti text-sm lg:text-2xl text-center">
        In unserem Haus, das für zwei Personen die ideale Größe hat,
        <br className="hidden lg:inline" /> erwartet Dich ein großer Wohnraum
        mit bequemem Sofa,
        <br className="hidden lg:inline" /> eine vollständig ausgestattete
        Küche und ein modernes Bad
        <br className="hidden lg:inline" /> mit Dusche und WC. Im Obergeschoss
        findest Du das
        <br className="hidden lg:inline" /> Schlafzimmer mit Doppelbett und
        außerdem ein kleines
        <br className="hidden lg:inline" /> WC.
      </p>
      {!isMobile ? <HausSVG /> : <></>}
    </animated.div>
  );
}

export default SecondSection;
