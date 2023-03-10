import React from "react";
import {
  TeamHeader,
  MemberCardList,
  GroupPicture,
  MemberInfoList,
} from "@/components/Team";

const Team = () => {
  return (
    <section className="mx-auto w-[clamp(320px,88.889vw,800px)] pad:w-[clamp(718.45px,66.523vw,1402px)] desktop:w-[clamp(1320px,68.750vw,1584px)] pt-[clamp(95px,26.389vw,109px)] pad:pt-[clamp(129px,11.944vw,175px)] desktop:pt-[clamp(186px,9.688vw,223.2px)] pb-[clamp(167px,46.389vw,250px)] pad:pb-[clamp(162.83px,15.077vw,230px)] desktop:pb-[clamp(374px,19.479vw,448.8px)]">
      <TeamHeader />
      <MemberCardList />
      <GroupPicture />
      <MemberInfoList />
    </section>
  );
};

export default Team;
