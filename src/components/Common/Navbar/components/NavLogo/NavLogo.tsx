import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import logo2 from "@/assets/logo/logo2.svg";
import logo from "@/assets/logo/logo.svg";
import NavigationContext from "@/contexts/NavigationContext";

import { NavLogoType } from "./NavLogo.types";

const NavLogo = ({ location, checkActiveLink, isTechVision }:NavLogoType) => {
  const { toggle } = useContext(NavigationContext)
  const isHomeLogo: string =
    location.pathname === "/" || toggle || isTechVision
      ? "text-main-white"
      : "text-main-black filter invert";
  return (
    <NavLink
      to="/"
      className={`${isHomeLogo}`}
      onClick={(e) => checkActiveLink(e,"/")}
    >
      <img
        className="hidden pad:block pad:w-[clamp(144px,13.333vw,204px)] desktop:w-[clamp(204px,10.625vw,244.8px)] aspect-[221/65] transition delay-150 hover:opacity-70"
        src={logo2}
        alt="굳갱랩스 로고"
        loading="lazy"
      />
      <img
        className="block pad:hidden w-[clamp(47.52px,13.2vw,65px)] aspect-[47.45/32] transition delay-200 hover:opacity-70"
        src={logo}
        alt="굳갱랩스 로고"
        loading="lazy"
      />
    </NavLink>
  );
};

export default NavLogo;
