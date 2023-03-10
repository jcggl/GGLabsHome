import useScrollAnimation from "@/hooks/useScrollAnimation";
import React from "react";
import subIntroAsset from "@/assets/svg/home/sub-intro.svg";
import { useRecoilValue } from "recoil";
import { subIntroState } from "@/store/atoms";

const SubIntro = () => {
  const { ref, textStyle, imageStyle } = useScrollAnimation(0.7);
  const subIntroValue = useRecoilValue(subIntroState);

  return (
    <div
      ref={ref}
      style={{ height: "calc(var(--vh, 1vh) * 100)" }}
      className={`relative w-full font-spline tracking-[.01em] text-main-white overflow-hidden mx-auto max-w-[450px] pad:max-w-none touch-none`}
    >
      {/* title */}
      <div className="relative mx-auto max-w-[2304px]">
        <h3
          style={textStyle}
          className={`absolute w-[clamp(282px,78.333vw,400px)] pad:w-auto left-[clamp(30px,8.333vw,40px)] pad:left-[clamp(160px,14.815vw,260px)] desktop:left-[clamp(260px,13.542vw,312px)] top-[clamp(84px,23.3vw,100px)] pad:top-[clamp(129px,11.944vw,193px)] desktop:top-[clamp(193px,10.052vw,231.6px)] font-spline font-main-white tracking-[.01em] text-main-white text-[clamp(34px,9.44vw,40px)] pad:text-[clamp(58px,5.370vw,84px)] desktop:text-[clamp(84px,4.375vw,100.8px)] leading-[130%] ${
            subIntroValue ? "block" : "hidden"
          }`}
        >
          Avatar Communication
          <br />
          holds the key
          <br />
          to the future
          <br />
          of the metaverse.
        </h3>
        <div className="absolute right-[clamp(38px,10.556vw,45px)] pad:right-[clamp(197px,18.241vw,322px)] desktop:right-[clamp(322px,16.771vw,386.4px)] top-[clamp(329px,91.389vw,400px)] pad:top-[clamp(263px,24.352vw,319px)] desktop:top-[clamp(319px,16.615vw,328.8px)]">
          <img
            style={imageStyle}
            className={`w-[clamp(124px,34.44vw,170px)] pad:w-[clamp(193px,17.870vw,350px)] desktop:w-[clamp(359px,18.698vw,400.8px)] ${
              subIntroValue ? "block" : "hidden"
            }`}
            src={subIntroAsset}
            alt="톱니바퀴"
          />
        </div>
      </div>
      {/* subtitle */}
      <div
        className={`relative mx-auto max-w-[2304px] ${
          subIntroValue ? "block" : "hidden"
        }`}
      >
        <h4
          style={textStyle}
          className="absolute right-[clamp(17px,4.722vw,20px)] pad:right-[clamp(149px,13.796vw,248px)] desktop:right-[clamp(248px,12.917vw,297.6px)] top-[clamp(482px,133.889vw,610px)] pad:top-[clamp(531px,49.167vw,769px)] desktop:top-[clamp(769px,40.052vw,852.8px)] font-spline font-light font-main-white tracking-[.01em] w-[clamp(209px,58vw,270px)] pad:w-[clamp(426px,39.444vw,600px)] desktop:w-[clamp(600px,31.25vw,720px)] text-[clamp(16px,4.4vw,20px)] pad:text-[clamp(20px,1.852vw,28px)] desktop:text-[clamp(28px,1.458vw,33.6px)] leading-[143%]"
        >
          GoodGang Labs is pushing the forefront by developing the core
          technologies that enable fluid, natural, and expressive avatar
          dynamics.
        </h4>
      </div>
    </div>
  );
};

export default SubIntro;
