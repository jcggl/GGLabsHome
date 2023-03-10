import React, { useState } from "react";

const HiringButton = ({
  animationStyle,
}: {
  animationStyle: { transform: string };
}) => {
  return (
    <div
      style={animationStyle}
      className="relative flex justify-center items-center w-[clamp(104px,28.889vw,120.8px)] pad:w-[clamp(140px,12.963vw,182px)] desktop:w-[182px] h-[clamp(30px,8.333vw,36px)] pad:h-[clamp(42px,3.889vw,54px)] desktop:h-[54px] bg-main-white rounded-[5rem] text-[clamp(12px,3.333vw,14.4px)] pad:text-[clamp(16px,1.481vw,24px)] desktop:text-[24px] hover:opacity-70 cursor-pointer text-center text-black font-medium"
    >
      <a
        href="https://www.notion.so/goodganglabs/GoodGang-Careers-2565b36b1e134c42ac1a56b8a6b45b47"
        target="_blank"
        rel="noopener noreferrer"
      >
        We're hiring!
      </a>
    </div>
  );
};

export default HiringButton;
