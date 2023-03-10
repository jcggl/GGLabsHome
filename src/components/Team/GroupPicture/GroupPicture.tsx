import React from 'react'
import members from "@/assets/members/members.webp";

const GroupPicture = () => {
  return (
    <img
      className="w-full aspect-[1320/886.9] mt-[clamp(93.93px,26.092vw,140px)] pad:mt-[clamp(107.3px,9.935vw,150px)] desktop:mt-[clamp(218px,11.354vw,261.6px)]"
      src={members}
      alt="그룹 사진"
      loading="lazy"
    />
  );
}

export default GroupPicture