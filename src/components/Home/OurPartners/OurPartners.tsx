import React, { useRef } from "react";
import { partnersImageList } from "@/constants/Images/partners-image-list";
import usePartnerAnimation from "@/hooks/usePartnerAnimation";
import AutoSlider from "@/components/Home/AutoSlider/AutoSlider";
import useResize from "@/hooks/useResize";

const OurPartners = () => {
  const { ref, style } = usePartnerAnimation(0.7);
  const { width } = useResize();

    const imageRatio = useRef<string[]>([
      "aspect-[249.28/57.42]", //naverZ
      "aspect-[219.61/111.02]", //lineNext
      "aspect-[236/91]", //d2StartUp
      "aspect-[219.86/68]", //dosi
      "aspect-[277.84/100]", //nvidia
      "aspect-[139.12/130]", //planetarium
      "aspect-[100.31/150]", //kimgisaLab
    ]);

    const imageWidth = useRef<string[]>([
      "w-[clamp(115.5px,32.083vw,169.51px)] pad:w-[clamp(169.51px,15.695vw,249.28px)] desktop:w-[clamp(249.28px,12.983vw,100vw)]", //naverZ
      "w-[clamp(101.75px,28.264vw,149.33px)] pad:w-[clamp(149.33px,13.827vw,219.61px)] desktop:w-[clamp(219.61px,11.438vw,100vw)]", //lineNext
      "w-[clamp(108.56px,30.156vw,159.69px)] pad:w-[clamp(159.69px,14.786vw,236px)] desktop:w-[clamp(236px,12.292vw,100vw)]", //d2StartUp
      "w-[clamp(101.14px,28.094vw,149.51px)] pad:w-[clamp(149.51px,13.844vw,219.86px)] desktop:w-[clamp(219.86px,11.451vw,100vw)]", //dosi
      "w-[clamp(127.81px,35.503vw,188px)] pad:w-[clamp(188px,17.407vw,277.84px)] desktop:w-[clamp(277.84px,14.471vw,100vw)]", //nvidia
      "w-[clamp(64.46px,17.906vw,96.69px)] pad:w-[clamp(94.6px,8.759vw,139.12px)] desktop:w-[clamp(139.12px,7.246vw,100vw)]", //planetarium
      "w-[clamp(46.48px,12.911vw,68.21px)] pad:w-[clamp(68.21px,6.316vw,100.31px)] desktop:w-[clamp(100.31px,5.224vw,100vw)]", //kimgisaLab
    ]);

  return (
    <div
      ref={ref}
      className="flex flex-col justify-center w-full overflow-hidden touch-none"
      style={{ height: "calc(var(--vh, 1vh) * 100)" }}
    >
      <h3
        style={style}
        className="font-spline tracking-[.01em] text-main-white text-[clamp(16px,4.444vw,26px)] pad:text-[clamp(26px,2.407vw,40px)] desktop:text-[clamp(40px,2.083vw,48px)] leading-[118%] ml-[clamp(30px,8.333vw,150px)] pad:ml-[clamp(159px,14.722vw,258px)] desktop:ml-[clamp(258px,13.438vw,100vw)] pb-[clamp(98px,27.222vw,118px)] pad:pb-[clamp(94.23px,8.725vw,112px)] desktop:pb-[clamp(140px,7.292vw,168px)]"
      >
        Our Partners
      </h3>
      {width >= 1080 ? (
        <AutoSlider
          imageRatio={imageRatio.current}
          imageWidth={imageWidth.current}
          intersectionStyle={style}
          imageList={partnersImageList}
          slideStyle="hidden pad:flex"
        />
      ) : (
        <div style={style}>
          <AutoSlider
            // intersectionStyle={style}
            imageRatio={imageRatio.current.slice(0, 4)}
            imageWidth={imageWidth.current.slice(0, 4)}
            interval={2670}
            slideRange={2}
            imageList={partnersImageList.slice(0, 4)}
            slideStyle="flex pad:hidden mb-[clamp(48px,13.333vw,72px)]"
          />
          <AutoSlider
            // intersectionStyle={style}
            imageRatio={[...imageRatio.current.slice(4, 7), ""]}
            imageWidth={[...imageWidth.current.slice(4, 7), ""]}
            interval={2700}
            slideRange={2}
            imageList={[...partnersImageList.slice(4, 7), [""]]}
            slideStyle="flex pad:hidden"
          />
        </div>
      )}
    </div>
  );
};

export default OurPartners;
