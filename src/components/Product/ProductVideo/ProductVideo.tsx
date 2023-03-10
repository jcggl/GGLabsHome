import React, { useEffect, useRef, useState } from "react";
import soundOn from "@/assets/svg/product/sound-on.svg";
import soundOff from "@/assets/svg/product/sound-off.svg";
import fullScreen from "@/assets/svg/product/full-screen.svg";
import playButton from "@/assets/svg/product/play-button.svg";
import pauseButton from "@/assets/svg/product/pause-button.svg";

type Props = {
  videoSrc: string;
  iosVideoSrc: string;
};

const ProductVideo = (props: Props) => {
  const videoRef = useRef<any>();
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [hover, setHover] = useState<string>("opacity-0");
  const [timer, setTimer] = useState<any>([]);

  useEffect(() => {
    let handlePlay = (entries: any): any => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          if (isPlaying) {
            videoRef.current.play();
          } else if (!isPlaying) {
            videoRef.current.pause();
          }
        }
      });
    };
    let observer = new IntersectionObserver(handlePlay, {
      threshold: 0.8,
      rootMargin: "0px",
    });

    if (videoRef.current) observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, [videoRef, isPlaying]);

  // useEffect(() => {
  //   if (isPlaying) {
  //     videoRef.current.play();
  //   } else {
  //     videoRef.current.pause();
  //   }
  // }, [isPlaying]);

  const onFullScreenHandler = () => {
    videoRef.current?.requestFullscreen();
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  // const onEndedHandler = () => {
  //   if (videoRef.current.ended === true){
  //     videoRef.current.pause();
  //   }
  // }

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
    timer.forEach((item: any) => {
      clearTimeout(item);
    });
    setTimer([]);
    setHover("opacity-100");
    let t = setTimeout(() => {
      setHover("opacity-0");
    }, 1000);
    setTimer((prev: any) => [...prev, t]);
  };

  const hoverVideo = () => {
    setHover("opacity-100");
  };

  const unHoverVideo = () => {
    setHover(() => (!isPlaying ? "opacity-100" : "opacity-0"));
  };

  const moveMouseHandler = () => {
    timer.forEach((item: any) => {
      clearTimeout(item);
    });
    setTimer([]);
    setHover("opacity-100");
    let t = setTimeout(() => {
      setHover("opacity-0");
    }, 1000);
    setTimer((prev: any) => [...prev, t]);
  };
  
  return (
    <div className="relative mx-auto w-[clamp(300px,83.333vw,563px)] pad:w-[clamp(717.35px,66.421vw,1000px)] desktop:w-[clamp(1000px,52.083vw,1200px)] aspect-[1000/562.5] cursor-pointer">
      {isMuted ? (
        <img
          onClick={toggleMute}
          className="absolute w-[clamp(26px,7.222vw,39px)] pad:w-[clamp(40.8px,3.778vw,60px)] desktop:w-[clamp(60px,3.125vw,100vw)] bottom-[clamp(7.75px,2.153vw,20px)] pad:bottom-[clamp(20px,1.852vw,29.5px)] desktop:bottom-[clamp(29.5px,1.536vw,100vw)] left-[clamp(9px,2.5vw,21.76px)] pad:left-[clamp(21.76px,2.015vw,32px)] desktop:left-[clamp(32px,1.667vw,100vw)] hover:invert transition duration-[250ms] cursor-pointer z-[2] aspect-square"
          src={soundOff}
          alt="음소거해제"
        />
      ) : (
        <img
          onClick={toggleMute}
          className="absolute w-[clamp(26px,7.222vw,39px)] pad:w-[clamp(40.8px,3.778vw,60px)] desktop:w-[clamp(60px,3.125vw,100vw)] bottom-[clamp(7.75px,2.153vw,20px)] pad:bottom-[clamp(20px,1.852vw,29.5px)] desktop:bottom-[clamp(29.5px,1.536vw,100vw)] left-[clamp(9px,2.5vw,21.76px)] pad:left-[clamp(21.76px,2.015vw,32px)] desktop:left-[clamp(32px,1.667vw,100vw)] hover:invert transition duration-[250ms] cursor-pointer z-[2] aspect-square"
          src={soundOn}
          alt="음소거"
        />
      )}
      <img
        onClick={onFullScreenHandler}
        className="absolute w-[clamp(26px,7.222vw,39px)] pad:w-[clamp(40.8px,3.778vw,60px)] desktop:w-[clamp(60px,3.125vw,100vw)] bottom-[clamp(7.75px,2.153vw,20px)] pad:bottom-[clamp(20px,1.852vw,29.5px)] desktop:bottom-[clamp(29.5px,1.536vw,100vw)] right-[clamp(9px,2.5vw,21.76px)] pad:right-[clamp(21.76px,2.015vw,32px)] desktop:right-[clamp(32px,1.667vw,100vw)] hover:invert transition duration-[250ms] cursor-pointer z-[2] aspect-square"
        src={fullScreen}
        alt="전체화면"
      />
      {isPlaying ? (
        <img
          onClick={togglePlay}
          onMouseEnter={hoverVideo}
          onMouseMove={moveMouseHandler}
          className={`absolute w-[clamp(69px,19.167vw,90px)] pad:w-[clamp(81.6px,7.556vw,120px)] desktop:w-[clamp(120px,6.250vw,100vw)] top-[50%] left-[52%] translate-x-[-50%] translate-y-[-50%] z-[2] transition duration-[350ms] cursor-pointer ${hover}`}
          src={pauseButton}
          alt="정지 버튼"
        />
      ) : (
        <img
          onClick={togglePlay}
          className="absolute w-[clamp(69px,19.167vw,90px)] pad:w-[clamp(81.6px,7.556vw,120px)] desktop:w-[clamp(120px,6.250vw,100vw)] top-[50%] left-[52%] translate-x-[-50%] translate-y-[-50%] z-[2] transition duration-[350ms] cursor-pointer"
          src={playButton}
          alt="플레이 버튼"
        />
      )}
      <video
        playsInline
        onMouseEnter={hoverVideo}
        onMouseMove={moveMouseHandler}
        onMouseLeave={unHoverVideo}
        onClick={togglePlay}
        className="w-full h-full"
        style={{ clipPath: "inset(1px 1px)" }}
        ref={videoRef}
        muted={isMuted}
        autoPlay={false}
        loop={true}
        controls={false}
        // onEnded={}
      >
        {/* <source src={props.videoSrc} type="video/mp4" /> */}
        <source src={props.iosVideoSrc} type="video/mp4" />
      </video>
    </div>
  );
};

export default ProductVideo;
