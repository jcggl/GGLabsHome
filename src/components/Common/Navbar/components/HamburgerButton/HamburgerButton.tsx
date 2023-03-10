import React, { useContext } from "react";
import hamburger from "@/assets/common/hamburger.svg";
import NavigationContext from "@/contexts/NavigationContext";
import useHideOnScroll from "@/hooks/useHideOnScroll";

import { HamburgerButtonType } from "./HamburgerButton.types";

const HamburgerButton = ({ location, isTechVision }: HamburgerButtonType) => {
  const { toggle, toggleNavigation } = useContext(NavigationContext);
  const { navbarOpacityGenerator } = useHideOnScroll();
  const isHomeBorder: string =
    location.pathname === "/" || toggle || isTechVision
      ? "text-main-white filter invert"
      : "text-main-black";

  return (
    <div
      className="block pad:hidden flex justify-center cursor-pointer"
      onClick={() => {
        toggleNavigation();
        navbarOpacityGenerator();
      }}
    >
      <img
        className={`w-[clamp(20.21px,5.614vw,25px)] ${isHomeBorder}`}
        src={hamburger}
        alt="모바일 햄버거 버튼"
        loading="lazy"
      />
    </div>
  );
};

export default HamburgerButton;
