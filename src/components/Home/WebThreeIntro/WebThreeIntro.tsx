import React from "react";
import intersect from "@/assets/svg/home/Intersect.svg";
import intersectReverse from "@/assets/svg/home/Intersect-reverse.svg";
import useIntersectAnimation from "@/hooks/useIntersectAnimation";

const WebThreeIntro = () => {
  const { ref, FirstStyle, SecondStyle, ThirdStyle, FourthStyle, textStyle } = useIntersectAnimation(0.7);

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden touch-none"
      style={{ height: "calc(var(--vh, 1vh) * 100)" }}
    >
      <img
        style={FirstStyle}
        className="absolute object-cover left-[0%] w-[25%] h-[130vh]"
        src={intersect}
        alt="Intersect BG"
      />
      <img
        style={SecondStyle}
        className="absolute object-cover left-[25%] w-[25%] h-[120vh]"
        src={intersectReverse}
        alt="Intersect BG"
      />
      <img
        style={ThirdStyle}
        className="absolute object-cover left-[50%] w-[25%] h-[130vh]"
        src={intersect}
        alt="Intersect BG"
      />
      <img
        style={FourthStyle}
        className="absolute object-cover left-[75%] w-[25%] h-[120vh]"
        src={intersectReverse}
        alt="Intersect BG"
      />
      <div
        style={textStyle}
        className="flex justify-center items-center w-full h-full"
      >
        <h3 className="font-spline tracking-[.01em] font-medium text-main-white text-[clamp(30px,8.333vw,70px)] pad:text-[clamp(64px,5.926vw,110px)] desktop:text-[clamp(110px,5.729vw,100vw)] leading-[153%] pad:leading-[125%] desktop:leading-[118%] z-[2]">
          We will establish
          <br />
          the new standard for
          <br />
          how you represent
          <br />
          yourself in Web3.
        </h3>
      </div>
    </div>
  );
};

export default WebThreeIntro;
