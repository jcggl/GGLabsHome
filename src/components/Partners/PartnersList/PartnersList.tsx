import React, { useRef } from "react";
import PartnerWrapper from "../PartnerWrapper/PartnerWrapper";
import kimgisaLab from "@/assets/svg/home/kimgisa-lab-grey.svg";
import naverZ from "@/assets/svg/home/naver-z.svg";
import planetarium from "@/assets/svg/home/planetarium.svg";
import d2StartUp from "@/assets/svg/home/d2-startup.svg";
import nvidia from "@/assets/svg/home/nvidia.svg";
import lineNext from "@/assets/svg/home/line-next.svg";
import dosi from "@/assets/svg/home/dosi.svg";
import JJ from "@/assets/partners/img_partners_JJ.webp";
import JC from "@/assets/partners/img_partners_JC.webp";
import KP from "@/assets/partners/img_partners_KP.webp";
import AngelPartnerWrapper from "../AngelPartnerWrapper/AngelPartnerWrapper";

const PartnersList = () => {

  const firstLayer = useRef<string[]>([
    "pad:w-[clamp(169.51px,15.695vw,249.28px)] desktop:w-[clamp(249.28px,12.983vw,100vw)] brightness-0", //naverZ
    "pad:w-[clamp(149.33px,13.827vw,219.61px)] desktop:w-[clamp(219.61px,11.438vw,100vw)] brightness-0", //lineNext
    "pad:w-[clamp(159.69px,14.786vw,236px)] desktop:w-[clamp(236px,12.292vw,100vw)] brightness-0", //d2StartUp
    "pad:w-[clamp(94.6px,8.759vw,139.12px)] desktop:w-[clamp(139.12px,7.246vw,100vw)] brightness-0", //planetarium
  ]);
  
  const secondLayer = useRef<string[]>([
    "pad:w-[clamp(149.51px,13.844vw,219.86px)] desktop:w-[clamp(219.86px,11.451vw,100vw)] brightness-0", //dosi
    "pad:w-[clamp(188px,17.407vw,277.84px)] desktop:w-[clamp(277.84px,14.471vw,100vw)] brightness-0", //nvidia
    "pad:w-[clamp(68.21px,6.316vw,100.31px)] desktop:w-[clamp(100.31px,5.224vw,100vw)]", //kimgisaLab
  ]);

  const firstLayerImage = useRef<string[]>([
    naverZ,
    lineNext,
    d2StartUp,
    planetarium
  ])

  const secondLayerImage = useRef<string[]>([
    dosi,
    nvidia,
    kimgisaLab
  ]);

  const thirdLayerImage = useRef<string[]>([
    JJ,
    KP,
    JC
  ]);

  const thirdLayerName = useRef<string[]>([
    "Joohwan Jung",
    "Konstantinos\nPapamilpitias",
    "JC Kim",
  ]);

  return (
    <div className="hidden pad:flex flex-col items-center pad:mt-[clamp(122.4px,11.333vw,180px)] desktop:mt-[clamp(180px,9.375vw,100vw)] pad:gap-y-[clamp(60.52px,5.604vw,89px)] desktop:gap-y-[clamp(89px,4.635vw,100vw)] pad:mb-[clamp(137.36px,12.719vw,202px)] desktop:mb-[clamp(202px,10.521vw,100vw)]">
      <div className="flex pad:gap-x-[clamp(17.68px,1.637vw,26px)] desktop:gap-x-[clamp(26px,1.354vw,100vw)]">
        {firstLayer.current.map((item, index) => {
          return (
            <PartnerWrapper
              key={`firstLayer${index}`}
              boxStyle="pad:w-[clamp(204px,18.889vw,300px)] desktop:w-[clamp(300px,15.625vw,100vw)]"
              style={item}
              src={firstLayerImage.current[index]}
            />
          );
        })}
      </div>
      <div className="flex pad:gap-x-[clamp(17.68px,1.637vw,26px)] desktop:gap-x-[clamp(26px,1.354vw,100vw)]">
        {secondLayer.current.map((item, index) => {
          return (
            <PartnerWrapper
              key={`secondLayer${index}`}
              boxStyle="pad:w-[clamp(204px,18.889vw,300px)] desktop:w-[clamp(300px,15.625vw,100vw)]"
              style={item}
              src={secondLayerImage.current[index]}
            />
          );
        })}
      </div>
      {/* <div className="flex pad:gap-x-[clamp(74.8px,6.926vw,110px)] desktop:gap-x-[clamp(110px,5.729vw,100vw)]">
        {thirdLayerImage.current.map((item, index) => {
          return (
            <AngelPartnerWrapper
              key={`thirdLayer${index}`}
              boxStyle="pad:w-[clamp(136px,12.593vw,200px)] desktop:w-[clamp(200px,10.417vw,100vw)] pad:text-[clamp(11px,1.019vw,16px)] desktop:text-[clamp(16px,0.833vw,100vw)] leading-[150%] text-main-black font-inter"
              innerStyle="pad:w-[clamp(95.2px,8.815vw,140px)] desktop:w-[clamp(140px,7.292vw,100vw)] pad:mb-[clamp(12.24px,1.133vw,18px)] desktop:mb-[clamp(18px,0.938vw,100vw)] aspect-square"
              src={item}
              name={thirdLayerName.current[index]}
            />
          );
        })}
      </div> */}
    </div>
  );
};

export default PartnersList;
