import React from "react";
import useScrollOnPlay from "@/hooks/useScrollOnPlay";

import { VideoType } from "./Video.types";

const Video = ({
  muted = true,
  autoPlay = false,
  loop = true,
  controls = false,
  src = "",
}: VideoType) => {
  const videoRef = useScrollOnPlay();

  return (
    <React.Fragment>
      {src ? (
        <video
          className="w-full h-full"
          ref={videoRef}
          muted={muted}
          autoPlay={autoPlay}
          loop={loop}
          controls={controls}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <div className="w-full h-full bg-[#D9D9D9] flex justify-center items-center">
          Demo Video
        </div>
      )}
    </React.Fragment>
  );
};

export default Video;
