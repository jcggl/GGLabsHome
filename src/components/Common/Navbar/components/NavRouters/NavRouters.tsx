import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { NavRouterType } from "./NavRouter.types";

const PATH: string[] = ["About", "Partners", "Product", "Team"];

const NavRouters = ({
  location,
  selected,
  checkActiveLink,
  isTechVision,
}: NavRouterType) => {
  const [hoverHire, setHoverHire] = useState<string>("right-0");

  const isHome: string =
    location.pathname === "/" || isTechVision
      ? "text-main-white"
      : "text-main-black";
  const isHomeBackground: string =
    location.pathname === "/" || isTechVision
      ? "bg-main-white"
      : "bg-main-black";
  const isNotHome: string =
    location.pathname === "/" || isTechVision
      ? "text-main-black"
      : "text-main-white";

  const expandDiv = () => {
    setHoverHire("right-[-25%]");
  };
  const shortenDiv = () => {
    setHoverHire("right-0");
  };

  return (
    <>
      {PATH.map((address, index) => {
        const selectedFont =
          selected === "/" + address ? "font-bold" : "font-normal";
        return (
          <NavLink
            key={`NavLinkKey${index}`}
            to={`/${address}`}
            className={`flex justify-center items-center pad:w-[clamp(74px,6.852vw,128px)] desktop:w-[clamp(128px,6.667vw,153.6px)] ${isHome} ${selectedFont} transition duration-[150ms] hover:opacity-70`}
            onClick={(e: any) => checkActiveLink(e, address)}
          >
            {address}
          </NavLink>
        );
      })}
      <div
        className={`relative flex justify-center items-center pad:w-[clamp(96px,8.889vw,154px)] desktop:w-[clamp(145px,7.552vw,174px)] ${isHomeBackground} rounded-[5rem] transition duration-[150ms] aspect-[96/28] font-medium font-spline tracking-[.01em]`}
        onMouseOver={expandDiv}
        onMouseLeave={shortenDiv}
      >
        <a
          href="https://www.notion.so/goodganglabs/GoodGang-Careers-2565b36b1e134c42ac1a56b8a6b45b47"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-center ${isNotHome} z-[2]`}
        >
          We're hiring!
        </a>
        <a
          href="https://www.notion.so/goodganglabs/GoodGang-Careers-2565b36b1e134c42ac1a56b8a6b45b47"
          target="_blank"
          rel="noopener noreferrer"
          className={`absolute flex items-center justify-end right-0 pad:pr-[clamp(15px,1.389vw,22px)] desktop:pr-[clamp(22px,1.146vw,100vw)] rounded-[5rem] pad:w-[clamp(96px,8.889vw,154px)] desktop:w-[clamp(145px,7.552vw,174px)] aspect-[96/28] transition-all ease-in-out duration-[300ms] ${isHomeBackground} ${isNotHome} ${hoverHire}`}
        >
          <div
            className={`${
              hoverHire === "right-[-25%]" ? "opacity-100" : "opacity-0"
            } transition-all ease-out duration-[300ms] font-bold`}
          >
            KO
          </div>
        </a>
      </div>
    </>
  );
};

export default NavRouters;
