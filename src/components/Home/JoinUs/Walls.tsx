import React from "react";

import left from "@/assets/home/join-us/original/left.webp";
import right from "@/assets/home/join-us/original/right.webp";
import top from "@/assets/home/join-us/original/top.webp";
import bottom from "@/assets/home/join-us/original/bottom.webp";
import useCombineWall from "@/hooks/useCombineWall";

const Walls = () => {
  const { ref, bottomStyle, leftStyle, rightStyle, topStyle } =
    useCombineWall(0.7);
  return (
    <div ref={ref} className="relative top-0 left-0 hidden pad:block w-full h-screen">
      <img
        style={bottomStyle}
        className="absolute pad:right-[-34vw] desktop:right-[-2.4vw] pad:top-[clamp(348px,32.222vw,437.6px)] desktop:top-[441.6px] w-[221.667vw] pad:w-[204.001vw] desktop:w-[148.854vw] pad:h-[clamp(377.77px,34.979vw,453.324px)] desktop:h-[490.04px] pad:aspect-auto max-w-none max-h-none"
        src={bottom}
        alt="하단 벽"
      />
      <img
        style={leftStyle}
        className="absolute pad:right-[93.411vw] desktop:right-[90.633vw] pad:top-[clamp(109.75px,10.162vw,151.7px)] desktop:top-[132.672px] pad:w-[76.681vw] desktop:w-[55.952vw] pad:h-[clamp(616.52px,57.085vw,739.824px)] desktop:h-[799.75px] pad:aspect-auto max-w-none max-h-none"
        src={left}
        alt="좌측 벽"
      />
      <img
        style={rightStyle}
        className="absolute pad:right-[-33.908vw] desktop:right-[0] pad:top-[clamp(-133.92px,-12.4vw,-133.92px)] desktop:top-[-172px] w-[79.392vw] pad:w-[73.056vw] pad:h-[clamp(615.76px,57.015vw,738.912px)] desktop:w-[53.313vw] desktop:h-[798.77px] pad:aspect-auto max-w-none max-h-none"
        src={right}
        alt="우측 벽"
      />
      <img
        style={topStyle}
        className="absolute pad:right-[-34vw] desktop:right-[-2.4vw] pad:top-[clamp(-127.44px,-11.8vw,-127.44px)] desktop:top-[-176.064px] pad:w-[204.001vw] desktop:w-[148.854vw] pad:h-[clamp(377.77px,34.979vw,453.324px)] desktop:h-[488.08px] pad:aspect-auto max-w-none max-h-none"
        src={top}
        alt="상단 벽"
      />
    </div>
  );
};

export default Walls;
