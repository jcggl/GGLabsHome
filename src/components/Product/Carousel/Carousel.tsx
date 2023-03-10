import React, { useState, useRef } from "react";

import useMoveSlide from "@/hooks/useMoveSlide";
import { kikitownImageList } from "@/constants/Images/kikitown-image-list";
import arrowLeft from "@/assets/common/arrow-left.svg";
import arrowRight from "@/assets/common/arrow-right.svg";
import useInterval from "@/hooks/useInterval";

interface Props {
  imageList?: string[];
  carouselSize?: string;
  hasDot?:boolean;
  intervalTime?:number;
}

const Carousel = ({
  imageList = kikitownImageList,
  carouselSize = "w-[clamp(300px,83.333vw,563px)] pad:w-[clamp(717.35px,66.421vw,1000px)] desktop:w-[clamp(1000px,52.083vw,1200px)] aspect-[1000/580]",
  hasDot = true,
  intervalTime=2812,
}: Props) => {
  const images = useRef<string[]>([
    imageList[imageList.length - 1],
    ...imageList,
    imageList[0],
  ]);
  const { style, current, moveSlide } = useMoveSlide(images.current.length);
  const [touch, setTouch] = useState<number | null>(null);
  const [isSwiping, setIsSwiping] = useState<boolean>(false);
  const [throttle, setThrottle] = useState<boolean>(false);
  const [timer, setTimer] = useState<any>();
  const isSinglePicture = images.current.length <= 3;

  /**
   *터치를 시작한 지점을 저장하는 함수
   */
  const handleTouchStart = (e: React.TouchEvent<HTMLInputElement>): void => {
    const currentTouch = e.touches[0].clientX;
    setTouch(currentTouch);
    setIsSwiping(true);
  };

  /**
   *터치를 중단했을 때 X축을 10이상 움직이면 스와이프하는 함수
   */
  const handleTouchMove = (e: React.TouchEvent<HTMLInputElement>): void => {
    const touchDown: number | null = touch;
    if (throttle) return;
    if (touchDown === null) return;
    clearTimeout(timer);
    setTimer((prev:any) =>
      setTimeout(() => {
        setThrottle(false);
      }, 600)
    );

    const currentTouch = e.touches[0].clientX;
    const touchDirection = touchDown - currentTouch;

    if (touchDirection > 4) {
      moveSlide(1);
    }

    if (touchDirection < -4) {
      moveSlide(-1);
    }

    setIsSwiping(false);
    setThrottle(true);
    setTouch(null);
  };

  // 자동 슬라이드
  useInterval(
    () => {
      moveSlide(1);
    },
    !isSwiping && !isSinglePicture && !throttle ? intervalTime : null
  );

  return (
    <div className="w-full">
      <div className="flex justify-around">
        <div className="flex items-center">
          <img
            className="hidden pad:block pad:w-[clamp(15.19px,1.406vw,38px)] desktop:w-[clamp(25px,1.302vw,30px)] cursor-pointer"
            onClick={() => {
              moveSlide(-1);
            }}
            src={arrowLeft}
            alt="ArrowLeft"
            loading="lazy"
          />
        </div>
        <div className="relative flex justify-center">
          <div className={`${carouselSize} overflow-hidden`}>
            <div
              className="flex"
              style={style}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
            >
              {images.current.map(
                (img: string, index: number): JSX.Element => (
                  <img
                    key={`${img}${index}`}
                    className={`flex-none ${carouselSize} object-cover`}
                    src={img}
                    alt="슬라이드 이미지"
                    loading="lazy"
                  />
                )
              )}
            </div>
          </div>
          <div className="flex absolute bottom-[clamp(6px,1.667vw,19px)] pad:bottom-[clamp(19px,1.759vw,26px)] desktop:bottom-[clamp(26px,1.354vw,31.2px)]">
            {imageList.length > 1 &&
              hasDot &&
              images.current.map(
                (_, index: number): JSX.Element | undefined => {
                  const isCurrentPicture: string =
                    index === current ||
                    (index === 1 && current === images.current.length - 1) ||
                    (index === images.current.length - 2 && current === 0)
                      ? "w-[clamp(4.2px,1.167vw,10px)] pad:w-[clamp(10px,0.926vw,15px)] desktop:w-[clamp(15px,0.781vw,18px)] aspect-square rounded-[100%] bg-white opacity-1"
                      : "w-[clamp(4.2px,1.167vw,10px)] pad:w-[clamp(10px,0.926vw,15px)] desktop:w-[clamp(15px,0.781vw,18px)] aspect-square rounded-[100%] bg-black opacity-60";
                  const skipMarginLeft: string =
                    index !== 0
                      ? "ml-[clamp(4px,1.111vw,10px)] pad:ml-[clamp(10px,0.926vw,15px)] desktop:ml-[clamp(15px,0.781vw,18px)]"
                      : "";
                  if (index === 0 || index === images.current.length - 1)
                    return (
                      <React.Fragment
                        key={`CarouselImageKey${index}`}
                      ></React.Fragment>
                    );
                  return (
                    <div
                      key={`CarouselImageKey${index}`}
                      className={isCurrentPicture + " " + skipMarginLeft}
                    ></div>
                  );
                }
              )}
          </div>
        </div>
        <div className="flex items-center">
          <img
            className="hidden pad:block pad:w-[clamp(15.19px,1.406vw,38px)] desktop:w-[clamp(25px,1.302vw,30px)] cursor-pointer"
            onClick={() => {
              moveSlide(1);
            }}
            src={arrowRight}
            alt="ArrowRight"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
