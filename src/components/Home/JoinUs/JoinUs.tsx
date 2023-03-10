import React from "react";
import { HiringButton } from "@/components/Common";
import useTextSlideUp from "@/hooks/useTextSlideUp";
import Walls from "./Walls";
import MobileWalls from "./MobileWalls";
import useResize from '@/hooks/useResize';

const JoinUs = () => {
  const { width } = useResize();
  const { ref, style, JoinUsStyle } = useTextSlideUp(width > 1080 ? 0.7 : 0.6);
  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden touch-none"
      style={{ height: "calc(var(--vh, 1vh) * 100)" }}
    >
      <div className="absolute flex flex-col w-[clamp(255px,70.833vw,360px)] pad:w-[clamp(603px,55.833vw,870px)] desktop:w-[clamp(812px,42.292vw,812px)] gap-y-[clamp(45px,12.5vw,52px)] pad:gap-y-[clamp(52px,4.815vw,60.4px)] desktop:gap-y-[62.5px] ml-[clamp(50px,13.889vw,150px)] pad:ml-[clamp(160px,14.815vw,260px)] desktop:ml-[clamp(260px,13.542vw,100vw)] pt-[clamp(249px,69.167vw,240px)] pad:pt-[clamp(309px,28.611vw,340px)] desktop:pt-[clamp(340px,17.708vw,350px)] text-main-white font-spline z-[1] tracking-[.01em]">
        <h4
          style={JoinUsStyle}
          className="font-light text-[clamp(16px,4.444vw,21.6px)] pad:text-[clamp(26px,2.407vw,40px)] desktop:text-[40px]"
        >
          Join Us
        </h4>
        <h3
          style={style}
          className="font-medium text-[clamp(28px,7.778vw,33.6px)] pad:text-[clamp(50px,4.63vw,64px)] desktop:text-[64px] leading-[140%]"
        >
          We value trust, autonomy, and exceptional ability.
        </h3>
        <HiringButton animationStyle={style} />
      </div>
      <Walls />
      <MobileWalls />
    </div>
  );
};

export default JoinUs;
