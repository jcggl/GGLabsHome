import React from "react";

import { VideoCardType } from "./VideoCard.types";
import useResize from "@/hooks/useResize";
import Carousel from "@/components/Product/Carousel/Carousel";
import ComingSoon from "@/components/Common/ComingSoon/ComingSoon";
import webcamBased1 from "@/assets/technology/tech-webcam1.webp";
import webcamBased2 from "@/assets/technology/tech-webcam2.webp";
import speechBased1 from "@/assets/technology/tech-voice1.webp";

const VideoCard = ({
  title = "Title",
  description = "Description",
  muted = true,
  autoPlay = false,
  loop = true,
  controls = false,
  src = "",
  index = 0,
  isEven = false,
}: VideoCardType) => {
  const { width } = useResize();
  const titleList: string[] = title.split(" ");
  const zigZagLayout = isEven ? "desktop:flex-row" : "desktop:flex-row-reverse";
  return (
    <div
      className={`mx-auto flex flex-col items-center ${zigZagLayout} desktop:justify-between w-[clamp(300px,83.333vw,710px)] pad:w-[clamp(680px,62.963vw,1000px)] desktop:w-[clamp(1400px,72.917vw,1680px)]`}
    >
      <div className="w-[clamp(300px,83.333vw,710px)] pad:w-[clamp(680px,62.963vw,1000px)] desktop:w-[clamp(880px,45.833vw,1056px)] aspect-[300/176.47] pad:aspect-[710/400] desktop:aspect-[880/490]">
        {/* <Video
          src={src}
          muted={muted}
          autoPlay={autoPlay}
          loop={loop}
          controls={controls}
        /> */}
        {/* 임시 대체 이미지 */}
        {index === 0 && (
          <Carousel
            imageList={[webcamBased1, webcamBased2]}
            carouselSize="w-[clamp(300px,83.333vw,710px)] pad:w-[clamp(680px,62.963vw,1000px)] desktop:w-[clamp(880px,45.833vw,1056px)] aspect-[300/176.47]"
            hasDot={false}
            intervalTime={4020}
          />
        )}
        {index === 1 && (
          <img
            className="w-[clamp(300px,83.333vw,710px)] pad:w-[clamp(680px,62.963vw,1000px)] desktop:w-[clamp(880px,45.833vw,1056px)] aspect-[300/176.47]"
            src={speechBased1}
            alt="speechBasedPics"
            loading="lazy"
          />
        )}
        {index === 2 && <ComingSoon />}
      </div>
      <div className="flex flex-col desktop:justify-center w-[clamp(300px,83.333vw,710px)] pad:w-[clamp(680px,62.963vw,1000px)]  desktop:w-[clamp(455px,23.698vw,546px)]">
        <h3 className="font-bold text-[clamp(12px,3.333vw,25px)] pad:text-[clamp(24px,2.222vw,35px)] desktop:text-[clamp(40px,2.083vw,48px)] leading-[166%] pad:leading-[140%] desktop:leading-[130%] mb-[clamp(6px,1.667vw,13px)] mt-[clamp(9.5px,2.639vw,20px)] pad:my-[clamp(10px,0.926vw,24px)] desktop:my-[clamp(24px,1.25vw,28.8px)]">
          {width >= 1920 ? (
            <>
              {titleList[0]}
              <br />
              {titleList.slice(1, 4).join(" ")}
            </>
          ) : (
            title
          )}
        </h3>
        <h4 className="text-[clamp(11px,3.056vw,14px)] pad:text-[clamp(14px,1.296vw,20.5px)] desktop:text-[clamp(20px,1.042vw,24px)] leading-[145%] pad:leading-[120%] desktop:leading-[150%]">
          {description}
        </h4>
      </div>
    </div>
  );
};

export default VideoCard;
