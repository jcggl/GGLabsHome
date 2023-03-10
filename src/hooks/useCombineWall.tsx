import { partnerState, wallState } from "@/store/atoms";
import { useRef, useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import useResize from "./useResize";

const useCombineWall = (duration: number = 1, delay: number = 0) => {
  const ref = useRef<any>();
  const [wall, setWall] = useRecoilState(wallState);
  const [time, setTime] = useState<any>([]);
  const [partner, setPartner] = useRecoilState(partnerState);
  const { width } = useResize();

  const mobileWidth = width < 1080 ? 600 : 700;

  const handleScroll = useCallback(
    ([entry]: any) => {
      if (entry.isIntersecting) {
        for (let i = 0; i < 4; i++) {
          ref.current.children[i].style.transitionProperty = "all";
          ref.current.children[i].style.transitionDuration = `${duration}s`;
          ref.current.children[i].style.transitionTimingFunction =
            "ease-out";
          ref.current.children[i].style.transitionDelay = `${delay}s`;
        }

        if (
          ref.current.children[0].style.transform !==
          "translate3d(0px, 0px, 0px)"
        ) {
          ref.current.children[0].style.transform = "translate3d(2vw, -1.4vw, 0)";
          ref.current.children[1].style.transform =
            "translate3d(2vw, -1.4vw, 0)";
          ref.current.children[2].style.transform =
            "translate3d(-0.7vw, -1.4vw, 0)";
          ref.current.children[3].style.transform = "translate3d(2vw, 1.4vw, 0)";
          let t = setTimeout(() => {
            ref.current.children[0].style.transform =
              "translate3d(0px, 0px, 0px)";
            ref.current.children[1].style.transform =
              "translate3d(0px, 0px, 0px)";
            ref.current.children[2].style.transform =
              "translate3d(0px, 0px, 0px)";
            ref.current.children[3].style.transform =
              "translate3d(0px, 0px, 0px)";
          }, mobileWidth + 80);
          setPartner(false);
          setWall(true)
          setTime((prev: any) => [...prev, t]);
        }
      } else if (
        !wall &&
        ref.current.children[0].style.transform !== "translate3d(0px, 40vw, 0px)"
      ) {
        time.forEach((item: any) => {
          clearTimeout(item);
        });
        setTime([]);
        ref.current.children[0].style.transform = "translate3d(0, 40vw, 0)";
        ref.current.children[1].style.transform = "translate3d(-40vw, 0, 0)";
        ref.current.children[2].style.transform = "translate3d(40vw, 0, 0)";
        ref.current.children[3].style.transform = "translate3d(-40vw, 0, 0)";
      } 
    },
    [duration, delay, wall, setWall, mobileWidth, time, setPartner]
  );

  useEffect(() => {
    let observer: any;

    if (ref.current) {
      observer = new IntersectionObserver(handleScroll, {
        threshold: 0.4,
        rootMargin: "0px 0px 0px 0px",
      });
      observer.observe(ref.current);
    }

    return () => observer && observer.disconnect();
  }, [handleScroll]);

  return {
    ref,
    bottomStyle: {
      transform: "translate3d(0, 40vw, 0)",
    },
    leftStyle: {
      transform: "translate3d(-40vw, 0, 0)",
    },
    rightStyle: {
      transform: "translate3d(40vw, 0, 0)",
    },
    topStyle: {
      transform: "translate3d(-40vw, 0, 0)",
    },
  };
};

export default useCombineWall;
