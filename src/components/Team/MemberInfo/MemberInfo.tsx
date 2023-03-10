import React from "react";

import SNSIcon from "@/components/Common/SNSIcon/SNSIcon";
import linkedin from "@/assets/svg/linkedIn.svg";

import { MemberInfoType } from "./MemberInfo.types";

const MemberInfo = ({
  role = "CEO / Co-Founder",
  name = "이름을 입력하세요.",
  href = "",
  hasLinkedIn = true,
  mobileIconWidth = "w-[clamp(18.8px,5.222vw,25.5px)]",
}: MemberInfoType) => {
  return (
    <div className="flex flex-col justify-center">
      <h5 className="text-[clamp(11px,3.056vw,14px)] pad:text-[clamp(12px,1.111vw,22px)] desktop:text-[clamp(18px,0.938vw,21.6px)] leading-[150%] pad:leading-[216%] desktop:leading-[200%]">
        {role}
      </h5>
      <div className="flex justify-between">
        <h4 className="font-medium text-black text-[clamp(18px,5vw,22px)] pad:text-[clamp(20px,1.852vw,36px)] desktop:text-[clamp(30px,1.563vw,36px)] leading-[120%]">
          {name}
        </h4>
        {hasLinkedIn ? (
          <div
            className={`${mobileIconWidth} pad:w-[clamp(19.69px,1.823vw,40.5px)] desktop:w-[clamp(37.5px,1.953vw,45px)] mb-[clamp(3px,0.833vw,5px)] mr-[clamp(3px,0.833vw,5px)] pad:mb-[0px] pad:mb-[0px]`}
          >
            <SNSIcon href={href} imgSrc={linkedin} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MemberInfo;
