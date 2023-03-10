import React from "react";
import useResizeTechIntroHeight from "@/hooks/useResizeTechIntroHeight";

const TechnologyIntro = () => {
  const { ref } = useResizeTechIntroHeight();
  return (
    <div ref={ref} className="flex flex-col items-center justify-center w-full h-screen min-h-[640px] pad:min-h-[768px] desktop:min-h-[1080px]">
      <h3 className="flex text-black font-spline tracking-[.01em] font-bold text-center text-[clamp(28px,7.778vw,51px)] pad:text-[clamp(55px,5.093vw,70px)] desktop:text-[clamp(85px,4.427vw,102px)] leading-[140%] px-[clamp(40px,11.111vw,70px)] pad:px-[0px]">
        Your face, voice, or words.
        <br />
        We can handle it all.
      </h3>
      <h4 className="flex text-center text-black pt-[clamp(100px,27.778vw,150px)] pad:pt-[clamp(142px,13.148vw,160px)] desktop:pt-[clamp(120px,6.25vw,144px)] px-[clamp(35px,9.772vw,40px)] pad:px-[0px] text-[clamp(14px,3.889vw,17px)] pad:text-[clamp(18px,1.667vw,23px)] desktop:text-[clamp(30px,1.563vw,36px)] leading-[143%] pad:leading-[155%] desktop:leading-[166%]">
        Animate your avatar using your video, microphone, or text input.
        <br />
        Our cloud-based real-time avatar motion API will let you integrate it in
        no time.
      </h4>
    </div>
  );
};

export default TechnologyIntro;
