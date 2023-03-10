import React, { useRef } from "react";
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
import PartnerWrapper from "../PartnerWrapper/PartnerWrapper";
import AngelPartnerWrapper from "../AngelPartnerWrapper/AngelPartnerWrapper";

const PartnersListMobile = () => {
  const partnersList = useRef<string[]>([
    "w-[clamp(103.87px,28.853vw,207.74px)] brightness-0", //naverZ
    "w-[clamp(92.97px,25.825vw,185.04px)] brightness-0", //lineNext
    "w-[clamp(99.91px,27.753vw,200px)] brightness-0", //d2StartUp
    "w-[clamp(91.61px,25.447vw,183.2px)] brightness-0", //dosi
    "w-[clamp(115.77px,32.158vw,231.54px)] brightness-0", //nvidia
    "w-[clamp(57.97px,16.103vw,115.84px)] brightness-0", //planetarium
    "w-[clamp(39.32px,10.922vw,78.64px)]", //kimgisaLab
  ]);

  const firstLayerImage = useRef<string[]>([
    naverZ,
    lineNext,
    d2StartUp,
    dosi,
    nvidia,
    planetarium,
    kimgisaLab,
    // KP,
    // JJ,
    // JC
  ]);

  // const partnersName = useRef<string[]>([
  //   "Konstantinos\nPapamilpitias",
  //   "Joohwan Jung",
  //   "JC Kim",
  // ]);

  return (
    <div className="grid pad:hidden justify-center items-center mt-[clamp(63px,17.5vw,94.5px)] grid-cols-2 gap-x-[clamp(7px,1.944vw,10.5px)] gap-y-[clamp(44px,12.222vw,66px)] mx-[clamp(55px,15.278vw,82.5px)] mb-[clamp(105.8px,29.389vw,158.7px)]">
      {firstLayerImage.current.map((item, index) => {
        return (
          <PartnerWrapper
            key={`mobileGridPartner${index}`}
            src={item}
            boxStyle={`"w-[clamp(125px,34.722vw,187.5px)] h-[clamp(68px,18.889vw,102px)] mx-auto ${
              index === 6 && "mt-[clamp(9px,2.5vw,13.5px)]"
            }`}
            style={partnersList.current[index]}
          />
        );

        // return (
        //   <AngelPartnerWrapper
        //     key={`mobileGridPartner${index}`}
        //     src={item}
        //     boxStyle={
        //       "w-[w-[clamp(125px,34.722vw,187.5px)]] text-[clamp(7.5px,2.083vw,11.25px)] leading-[130%] text-main-black font-inter"
        //     }
        //     innerStyle="w-[clamp(52.76px,14.656vw,79.14px)] mb-[clamp(10.89px,3.025vw,16.335px)] aspect-square"
        //     name={partnersName.current[index - 7]}
        //   />
        // );
      })}
    </div>
  );
};

export default PartnersListMobile;
