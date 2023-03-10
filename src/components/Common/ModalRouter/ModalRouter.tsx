import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import NavigationContext from "@/contexts/NavigationContext";

const PATH: string[] = ["About", "Partners", "Product", "Team"];

const ModalRouter = () => {
  const location = useLocation();
  const { toggleNavigation } = useContext(NavigationContext);
  const [selected, setSelected] = useState<string>("/");
  const [hoverHire, setHoverHire] = useState<string>("right-0");

  const expandDiv = () => {
    setHoverHire("right-[-33%]");
  };
  const shortenDiv = () => {
    setHoverHire("right-0");
  };

  const checkActiveLink = (current: string): void => {
    setSelected("/" + current);
    toggleNavigation()
  };

  useEffect(() => {
    setSelected(location.pathname);
  }, [location]);

  return (
    <div className="flex flex-col justify-center pl-[clamp(52px,14.444vw,600px)] w-full h-screen font-spline tracking-[.01em]">
      {PATH.map((address, index) => {
        const selectedFont =
          selected === "/" + address ? "text-main-white" : "text-main-grey";
        return (
          <NavLink
            key={`NavLinkKey${index}`}
            to={`/${address}`}
            className={`block h-[clamp(46px,12.778vw,60px)] text-[clamp(30px,8.333vw,40px)] mb-[clamp(46px,12.778vw,50px)] ${selectedFont}`}
            onClick={() => checkActiveLink(address)}
          >
            {address}
          </NavLink>
        );
      })}
      <div
        className={`relative flex justify-center items-center text-[clamp(20px,5.556vw,30px)] w-[clamp(156px,43.333vw,245px)] h-[clamp(46px,12.778vw,64px)] bg-main-grey rounded-[5rem]`}
        onTouchStart={expandDiv}
        onTouchEnd={shortenDiv}
      >
        <a
          href="https://www.notion.so/goodganglabs/GoodGang-Careers-2565b36b1e134c42ac1a56b8a6b45b47"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-center text-black font-medium z-[1]`}
        >
          We're hiring!
        </a>
        <a
          href="https://www.notion.so/goodganglabs/GoodGang-Careers-2565b36b1e134c42ac1a56b8a6b45b47"
          target="_blank"
          rel="noopener noreferrer"
          className={`absolute flex items-center justify-end right-0 pr-[clamp(22px,1.146vw,100vw)] rounded-[5rem] bg-main-grey w-[clamp(156px,43.333vw,245px)] h-[clamp(46px,12.778vw,64px)] transition-all ease-in-out duration-[200ms] ${hoverHire}`}
        >
          <div
            className={`${
              hoverHire === "right-[-33%]" ? "opacity-100" : "opacity-0"
            } transition-all ease-out duration-[300ms] font-bold`}
          >
            KO
          </div>
        </a>
      </div>
    </div>
  );
};

export default ModalRouter;
