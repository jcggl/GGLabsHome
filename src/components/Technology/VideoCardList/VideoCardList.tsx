import React from "react";
import { solutions } from "@/constants/OurSolutions/ourSolutions";
import { VideoCard } from '@/components/Technology';

const VideoCardList = () => {
  return (
    <div>
      {solutions.map((solution, index) => {
        return (
          <div
            key={`VideoCardKey${index}`}
            className="mb-[clamp(40px,11.111vw,81px)] pad:mb-[clamp(81px,7.5vw,170px)] desktop:mb-[clamp(344px,17.917vw,412.8px)]"
          >
            <VideoCard {...solution} isEven={index % 2 === 0} index={index} />
          </div>
        );
      })}
    </div>
  );
};

export default VideoCardList;
