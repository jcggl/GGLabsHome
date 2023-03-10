import { mainAnimationState, resetScrollState, subIntroState } from "@/store/atoms";
import React, { useCallback, useEffect, useRef } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import useResize from "./useResize";

const useMainAnimation = (
  duration: number = 1,
  delay: number = 0
) => {
  const ref = useRef<any>();
  const { height } = useResize();
  const setSubIntro = useSetRecoilState(subIntroState);
  const [mainAnimation, setMainAnimation] = useRecoilState(mainAnimationState);

  const handleScroll = useCallback(
    ([entry]: any) => {
      if (entry.isIntersecting) {
        ref.current.children[1].style.transitionProperty = "all";
        ref.current.children[1].style.transitionDuration = `${duration}s`;
        ref.current.children[1].style.transitionTimingFunction = "ease-in-out";
        ref.current.children[1].style.transitionDelay = `${delay}s`;
        for (let i = 0; i < 3; i++) {
          ref.current.children[0].children[0].children[
            i
          ].style.transitionProperty = "all";
          ref.current.children[0].children[0].children[
            i
          ].style.transitionDuration = `${duration}s`;
          ref.current.children[0].children[0].children[
            i
          ].style.transitionTimingFunction = "ease-in-out";
          ref.current.children[0].children[0].children[
            i
          ].style.transitionDelay = `${delay}s`;
        }

        if (ref.current.children[1].style.transform !== "scale(1, 1)") {
          ref.current.children[1].style.transform = "scale(1, 1)";
          ref.current.children[1].style.filter = "blur(0px)";
          ref.current.children[0].children[0].children[0].style.transform =
            "translateY(0px)";
          ref.current.children[0].children[0].children[1].style.transform =
            "translateY(0px)";
          ref.current.children[0].children[0].children[2].style.transform =
            "translateY(0px)";
          setTimeout(() => {
            setSubIntro(false);
          }, 600);
        }
        
      } else if (!mainAnimation) {
        ref.current.children[1].style.transform = "scale(2.5, 2.5)";
        ref.current.children[1].style.filter = "blur(48px)";
        ref.current.children[0].children[0].children[0].style.transform =
          "translateY(-20vh)";
        ref.current.children[0].children[0].children[1].style.transform =
          "translateY(20vh)";
        ref.current.children[0].children[0].children[2].style.transform =
          "translateY(20vh)";
        setMainAnimation(true);
      }
    },
    [delay, duration, mainAnimation, setMainAnimation, setSubIntro]
  );

  useEffect(() => {
    let observer: any;

    if (ref.current) {
      observer = new IntersectionObserver(handleScroll, {
        threshold: 0.2,
        rootMargin: `0px 0px 0px 0px`,
      });
      observer.observe(ref.current);
    }

    return () => observer && observer.disconnect();
  }, [handleScroll, height]);

  return {
    ref,
    mainStyle: {
      transform: "scale(2.5, 2.5)",
      filter: "blur(48px)",
    },
    slideDownStyle: {
      transform: "translateY(-20vh)",
    },
    slideUpStyle: {
      transform: "translateY(20vh)",
    },
  };
};

export default useMainAnimation;
