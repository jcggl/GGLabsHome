import React from "react";
import { VideoCardList } from "@/components/Technology";

const OurSolutions = () => {
  return (
    <div className="w-full pt-[clamp(39px,10.833vw,75px)] pad:pt-[clamp(75px,6.944vw,135px)] desktop:pt-[clamp(171px,8.906vw,205.2px)] pb-[clamp(32px,8.889vw,48px)] pad:pb-[clamp(32px,2.963vw,48px)] desktop:pb-[0px]">
      <h3 className="text-center font-bold font-spline tracking-[.01em] mb-[clamp(38px,10.556vw,58px)] pad:mb-[clamp(84px,7.778vw,122px)] desktop:mb-[clamp(158px,8.229vw,189.6px)] text-[clamp(22px,6.111vw,42px)] pad:text-[clamp(38px,3.519vw,60px)] desktop:text-[clamp(60px,3.125vw,72px)] leading-[145%] pad:leading-[150%]">
        Our Solutions
      </h3>
      <VideoCardList />
    </div>
  );
};

export default OurSolutions;
