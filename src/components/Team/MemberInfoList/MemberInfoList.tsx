import React from "react";
import { members } from "@/constants/Members/members";
import { MemberInfo } from "@/components/Team";

const MemberInfoList = () => {
  return (
    <div className="grid grid-rows-12 pad:grid-cols-3 gap-y-[clamp(58px,16.111vw,80px)] pad:gap-y-[clamp(52.83px,4.892vw,118px)] desktop:gap-y-[clamp(118px,6.146vw,141.6px)] pad:gap-x-[clamp(59.31px,5.492vw,80px)] desktop:gap-x-[clamp(100px,5.208vw,120px)] w-full mt-[clamp(52px,14.444vw,77px)] pad:mt-[clamp(52.28px,4.841vw,122px)] desktop:mt-[clamp(95px,4.948vw,114px)]">
      {members.map((member, index) => {
        return (
          <div
            key={`memberKey${index}${String(Math.random())}`}
            className="mx-auto w-[clamp(256.89px,71.358vw,300px)] pad:w-[clamp(210px,19.444vw,450px)] desktop:w-[clamp(370px,19.271vw,492px)]"
          >
            <MemberInfo
              {...member}
              mobileIconWidth="w-[clamp(22.5px,6.250vw,30.5px)]"
            />
          </div>
        );
      })}
    </div>
  );
};

export default MemberInfoList;
