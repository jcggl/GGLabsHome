import { useRef, useEffect } from "react";

const useScrollOnPlay = () => {
  const videoRef = useRef() as React.MutableRefObject<HTMLVideoElement>;

  useEffect(() => {
    let handlePlay = (entries: any): any => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
          videoRef.current.muted = false;
        } else {
          videoRef.current.muted = true;
        }
      });
    };
    let observer = new IntersectionObserver(handlePlay, {
      threshold: [0.2, 0.8],
      rootMargin: "0px",
    });

    if (videoRef.current) observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, [videoRef]);


  return videoRef;
};

export default useScrollOnPlay;
