import React from 'react'

import left from "@/assets/home/join-us/original/left.webp";
import right from "@/assets/home/join-us/original/right.webp";
import top from "@/assets/home/join-us/original/top.webp";
import bottom from "@/assets/home/join-us/original/bottom.webp";
import useCombineWall from "@/hooks/useCombineWall";

const MobileWalls = () => {
  const { ref, bottomStyle, leftStyle, rightStyle, topStyle } =
    useCombineWall(0.6);
  return (
    <div ref={ref} className="relative top-0 left-0 pad:hidden w-full h-screen">
      <img
        style={bottomStyle}
        className="absolute right-[-47.2vw] top-[299.16px] w-[221.667vw] h-[315.21px] max-w-none max-h-none"
        src={bottom}
        alt="하단 벽"
      />
      <img
        style={leftStyle}
        className="absolute right-[91.678vw] top-[100.58px] w-[83.322vw] h-[514.42px] max-w-none max-h-none"
        src={left}
        alt="좌측 벽"
      />
      <img
        style={rightStyle}
        className="absolute right-[-46.667vw] top-[-98.63px] w-[79.392vw] h-[513.79px] max-w-none max-h-none"
        src={right}
        alt="우측 벽"
      />
      <img
        style={topStyle}
        className="absolute right-[-81.7vw] top-[-166px] w-[277.778vw] h-[382.32px] max-w-none max-h-none"
        src={top}
        alt="상단 벽"
      />
    </div>
  );
}

export default MobileWalls