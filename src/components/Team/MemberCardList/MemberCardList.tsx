import React from "react";
import { MemberCard } from "@/components/Team";
import { founders } from "@/constants/Members/founders";

const MemberCardList = () => {
  return (
    <div className="grid grid-rows-12 pad:grid-cols-3 place-items-center gap-x-[0] pad:gap-x-[clamp(59.65px,5.523vw,86px)] desktop:gap-x-[clamp(100.36px,5.227vw,120.432px)] gap-y-[clamp(70px,19.444vw,120px)] pad:gap-y-[0] pt-[clamp(81px,22.5vw,100px)] pad:pt-[clamp(107px,9.907vw,152px)] desktop:pt-[clamp(139px,7.24vw,166.8px)]">
      {founders.map((founder, index) => {
        return <MemberCard key={`founderKey${index}`} {...founder} />;
      })}
    </div>
  );
};

export default MemberCardList;
