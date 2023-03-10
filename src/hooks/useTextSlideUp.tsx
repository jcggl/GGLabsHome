import { joinUsTextState, wallState } from "@/store/atoms";
import { useRef, useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";
import useResize from "./useResize";

const useTextSlideUp = (duration: number = 1, delay: number = 0) => {
  const ref = useRef<any>();
  const [wall, setWall] = useRecoilState(wallState);
  const { width } = useResize();
  const mobileWidth = width < 1080 ? 600 : 700;

  const handleScroll = useCallback(
    ([entry]: any) => {
      if (entry.isIntersecting) {
        for (let i = 0; i < 3; i++) {
          ref.current.children[0].children[i].style.transitionProperty = "all";
          ref.current.children[0].children[
            i
          ].style.transitionDuration = `${duration}s`;
          ref.current.children[0].children[i].style.transitionTimingFunction =
            "ease-out";
          ref.current.children[0].children[
            i
          ].style.transitionDelay = `${delay}s`;
          if (
            ref.current.children[0].children[0].style.transform !==
            "translate3d(0px, 0px, 0px)"
          ) {
            ref.current.children[0].children[i].style.transform =
              i !== 0
                ? "translate3d(0, -0.4vw, 0)"
                : "translate3d(0, 0.2vw, 0)";
          }
        }
        if (
          ref.current.children[0].children[0].style.transform !==
          "translate3d(0px, 0px, 0px)"
        ) {
          setTimeout(() => {
            ref.current.children[0].children[0].style.transform =
              "translate3d(0, 0, 0)";
            ref.current.children[0].children[1].style.transform =
              "translate3d(0, 0, 0)";
            ref.current.children[0].children[2].style.transform =
              "translate3d(0, 0, 0)";
          }, mobileWidth);
        }
      } else if (
        !wall &&
        ref.current.children[0].children[0].style.transform !==
          "translate3d(0, -6vw, 0)"
      ) {
        ref.current.children[0].children[0].style.transform =
          "translate3d(0, -6vw, 0)";
        ref.current.children[0].children[1].style.transform =
          "translate3d(0, 14vw, 0)";
        ref.current.children[0].children[2].style.transform =
          "translate3d(0, 14vw, 0)";
      }
    },
    [duration, delay, wall, mobileWidth]
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
    style: {
      transform: "translate3d(0, 14vw, 0)",
    },
    JoinUsStyle: {
      transform: "translate3d(0, -6vw, 0)",
    },
  };
};

export default useTextSlideUp;
