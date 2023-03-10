import React from "react";

import Carousel from "@/components/Product/Carousel/Carousel";
import { kikitownImageList } from "@/constants/Images/kikitown-image-list";
import longArrowRight from "@/assets/common/long-arrow-right.svg";

import { CarouselCardType } from "./CarouselCard.types";
import ProductVideo from "../ProductVideo/ProductVideo";

const CarouselCard = ({
  imageList = kikitownImageList,
  iosVideoSrc,
  videoSrc,
  linkTitle = "coming soon!",
  href = "#",
  title = "Title",
  subTitle = "Subtitle",
  description = "Description",
}: CarouselCardType) => {
  return (
    <div>
      {/* <Carousel imageList={imageList} /> */}
      <ProductVideo iosVideoSrc={iosVideoSrc} videoSrc={videoSrc}/>
      <div className="w-[clamp(300px,83.333vw,563px)] pad:w-[clamp(717.35px,66.421vw,1000px)] desktop:w-[clamp(1000px,52.083vw,1200px)] mx-auto">
        <div className="flex justify-end">
          {linkTitle !== "coming soon!" ? (
            <a
              className={`flex items-center text-black text-[clamp(8px,2.222vw,16px)] pad:text-[clamp(14px,1.296vw,20px)] desktop:text-[clamp(20px,1.042vw,24px)]`}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {linkTitle}
              <img
                className="ml-[clamp(3.76px,1.044vw,8px)] pad:ml-[clamp(6px,0.556vw,7.2px)] desktop:ml-[clamp(6px,0.313vw,7.2px)] w-[clamp(12px,3.333vw,20px)] pad:w-[clamp(15.25px,1.412vw,22px)] desktop:w-[clamp(22px,1.146vw,26.4px)]"
                src={longArrowRight}
                alt="Long Right Arrow"
              />
            </a>
          ) : (
            <div className="w-[clamp(68px,18.889vw,102px)] pad:w-[clamp(106px,9.815vw,127.2px)] desktop:w-[clamp(154px,8.021vw,184.8px)] flex justify-center items-center text-main-white text-[clamp(9px,2.5vw,12px)] pad:text-[clamp(14px,1.296vw,16.8px)] desktop:text-[clamp(20px,1.042vw,24px)] bg-third-grey aspect-[154/36] rounded mt-[clamp(4px,1.111vw,5px)] pad:mt-[clamp(5px,0.463vw,7px)] desktop:mt-[clamp(7px,0.365vw,8.4px)]">
              {linkTitle}
            </div>
          )}
        </div>
        <div className="desktop:pt-[clamp(29px,1.51vw,34.8px)]">
          <h3 className="text-black font-bold mt-[clamp(16.72px,4.644vw,30px)] pad:mt-[clamp(16px,1.481vw,42px)] desktop:my-[clamp(8px,0.417vw,9.6px)] text-[clamp(15px,4.167vw,28px)] pad:text-[clamp(30px,2.778vw,39px)] desktop:text-[clamp(36px,1.875vw,43.2px)] leading-[133%] pad:leading-[120%] desktop:leading-[110%]">
            {title}
          </h3>
          <h4 className="text-black font-medium text-[clamp(13px,3.611vw,23.5px)] pad:text-[clamp(18px,1.667vw,26px)] desktop:text-[clamp(24px,1.25vw,28.8px)] leading-[153%] pad:leading-[155%] desktop:leading-[160%]">
            {subTitle}
          </h4>
          <p className="text-black text-[clamp(10px,2.778vw,18px)] pad:text-[clamp(14px,1.296vw,20px)] desktop:text-[clamp(18px,0.938vw,21.6px)] leading-[140%] desktop:leading-[160%] pt-[clamp(7px,1.944vw,14px)] pad:pt-[clamp(9px,0.833vw,15px)] desktop:pt-[clamp(15px,0.781vw,18px)]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
