import React from "react";

import leftWall from "@/assets/home/main-intro/left-wall.webp";
import rightWall from "@/assets/home/main-intro/right-wall.webp";
import topWall from "@/assets/home/main-intro/top-wall.webp";
import bottomWall from "@/assets/home/main-intro/bottom-wall.webp";
import { resetScrollState } from "@/store/atoms";
import { useRecoilValue } from "recoil";
import useMainAnimation from "@/hooks/useMainAnimation";

const MainIntro = () => {
  const {
    ref: mainAniRef,
    slideUpStyle,
    slideDownStyle,
  } = useMainAnimation(0.6);
  const resetScrollValue = useRecoilValue(resetScrollState);
  return (
    <div
      ref={mainAniRef}
      className="relative w-screen overflow-hidden touch-none"
      style={{ height: "calc(var(--vh, 1vh) * 100)" }}
    >
      <div className="absolute flex justify-center items-center w-screen h-screen">
        <div className="flex flex-col w-[clamp(258px,71.667vw,516px)] pad:w-[clamp(614px,56.852vw,890px)] desktop:w-[clamp(1044px,54.375vw,100vw)] mb-[clamp(18px,5vw,36px)] pad:mb-0 ml-[clamp(8px,2.222vw,16px)] pad:ml-[clamp(20px,1.852vw,100vw)] desktop:ml-[clamp(6px,0.313vw,100vw)] pad:mt-[clamp(64px,5.926vw,100vw)] desktop:mt-[clamp(37px,1.927vw,100vw)]">
          <h3
            style={slideDownStyle}
            className={`self-start text-main-white font-spline font-semibold text-[clamp(40px,11.111vw,80px)] pad:text-[clamp(85px,7.870vw,130px)] desktop:text-[clamp(140px,7.292vw,100vw)] leading-[145%] pad:leading-[119%] tracking-[.01em]`}
          >
            Inspire Life
            <br />
            Into Avatars
          </h3>
          <h4
            style={slideUpStyle}
            className={`hidden pad:block self-end font-spline font-light text-main-white pad:text-[clamp(20px,1.852vw,28px)] desktop:text-[clamp(28px,1.458vw,100vw)] pad:leading-[143%] tracking-[.01em] pad:mt-[clamp(43px,3.981vw,100vw)] desktop:mt-[clamp(50px,2.604vw,100vw)]`}
          >
            Establishing the next generation
            <br />
            communication technology
            <br />
            for the metaverse
          </h4>
          <h4
            style={slideUpStyle}
            className={`pad:hidden self-end font-spline tracking-[.01em] text-main-white text-[clamp(14px,3.889vw,28px)] leading-[157%] mt-[clamp(38px,10.556vw,76px)]`}
          >
            GoodGang Labs is building
            <br />
            the next generation
            <br />
            communication platform
            <br />
            and technology for avatars.
          </h4>
        </div>
      </div>
      <div
        className={`relative w-screen h-screen ${
          resetScrollValue && "animate-[zoomBlurIn_.6s_ease-out]"
        }`}
      >
        <img
          className="absolute left-0 w-[clamp(0px,30.856%,100%)] h-screen object-fill"
          src={leftWall}
          alt="좌측 벽"
        />
        <img
          className="absolute right-0 w-[clamp(0px,30.856%,100%)] h-screen object-fill"
          src={rightWall}
          alt="우측 벽"
        />
        <img
          className="absolute top-0 w-screen h-[clamp(0px,43.766%,100%)] object-fill"
          src={topWall}
          alt="상단 벽"
        />
        <img
          className="absolute bottom-0 w-screen h-[clamp(0px,43.766%,100%)] object-fill"
          src={bottomWall}
          alt="하단 벽"
        />
      </div>
    </div>
  );
};

export default MainIntro;
