import React, { useState, useEffect } from "react";
import { animated, useSpring } from "@react-spring/web";
import NavBarback from "../single_comps/nabvar/NavbarBack";

function Navbar({ navClick }) {
  // const [showNav, setShowNav] = useState(true);
  // const [scrollPos, setScrollPos] = useState({ y: 0, lastY: 0 });
  // const spring = useSpring({
  //   transform: showNav ? "translate(0, 0)" : "translate(0, -100%)",
  // });
  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   setScrollPos((current) => {
  //     return { y: position, lastY: current.y };
  //   });
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll, { passive: true });

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // });
  // useEffect(() => {
  //   if (scrollPos.y <= scrollPos.lastY && showNav === false) {
  //     setShowNav(true);
  //   } else if (scrollPos.y > scrollPos.lastY && showNav === true) {
  //     setShowNav(false);
  //   }
  // }, [scrollPos, showNav]);
  return (
    <div className="fixed top-0 right-0 w-full z-50">
      <div className="absolute top-0 right-0 z-50">
        <NavBarback />
        <div className="absolute w-6/12 h-full top-0 right-0 flex z-50 mr-5 justify-end items-center gap-[1rem] lg:gap-[3rem] ">
          <div
            onClick={() => {
              navClick(1);
            }}
            className="font-athiti cursor-pointer"
          >
            Start
          </div>
          <div
            onClick={() => {
              navClick(2);
            }}
            className="font-athiti cursor-pointer"
          >
            Galerie
          </div>
          <div
            onClick={() => {
              navClick(3);
            }}
            className="font-athiti cursor-pointer"
          >
            Ausstattung
          </div>
          <div
            onClick={() => {
              navClick(4);
            }}
            className="font-athiti cursor-pointer"
          >
            Preis
          </div>
          <div
            onClick={() => {
              navClick(5);
            }}
            className="font-athiti cursor-pointer"
          >
            Kontakt
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
