import { useCallback, useEffect } from "react";
import { useRef } from "react";
import useResize from "@/hooks/useResize";
import { useRecoilState, useSetRecoilState } from "recoil";
import { intersectionState, mainAnimationState, subIntroState } from "@/store/atoms";

const useScrollAnimation = (duration: number = 1, delay: number = 0) => {
  const ref = useRef<any>();
  const { height } = useResize();
  const [subIntroValue, setSubIntroValue] = useRecoilState(subIntroState);
  const setIntersection = useSetRecoilState(intersectionState);
  const setMainAnimation = useSetRecoilState(mainAnimationState);

  const handleScroll = useCallback(
    ([entry]: any) => {
      if (entry.isIntersecting) {
        ref.current.children[1].children[0].style.transitionProperty = "all";
        ref.current.children[0].children[0].style.transitionProperty = "all";
        ref.current.children[0].children[1].children[0].style.transitionProperty =
          "all";
        ref.current.children[1].children[0].style.transitionDuration = `${duration}s`;
        ref.current.children[0].children[0].style.transitionDuration = `${duration}s`;
        ref.current.children[0].children[1].children[0].style.transitionDuration = `${duration}s`;
        ref.current.children[1].children[0].style.transitionTimingFunction =
          "cubic-bezier(0, 0, 0.58, 1)";
        ref.current.children[0].children[0].style.transitionTimingFunction =
          "cubic-bezier(0, 0, 0.58, 1)";
        ref.current.children[0].children[1].children[0].style.transitionTimingFunction =
          "cubic-bezier(0, 0, 0.58, 1)";
        ref.current.children[1].children[0].style.transitionDelay = `${delay}s`;
        ref.current.children[0].children[0].style.transitionDelay = `${delay}s`;
        ref.current.children[0].children[1].children[0].style.transitionDelay = `${delay}s`;

        if (
          ref.current.children[1].children[0].style.transform !==
          "translate3d(0px, 0px, 0px)"
        ) {
          ref.current.children[1].children[0].style.transform =
            "translate3d(0, -3vh, 0)";
          ref.current.children[0].children[0].style.transform =
            "translate3d(0, -3vh, 0)";
          ref.current.children[0].children[1].children[0].style.transform =
            "translate3d(20%, 0, 0)";

          setTimeout(() => {
            ref.current.children[1].children[0].style.transform =
              "translate3d(0, 0, 0)";
            ref.current.children[0].children[0].style.transform =
              "translate3d(0, 0, 0)";
            ref.current.children[0].children[1].children[0].style.transform =
              "translate3d(0, 0, 0)";
            setIntersection(false);
            setMainAnimation(false)
          }, 700);
        }
      } else if (!subIntroValue) {
        ref.current.children[1].children[0].style.transform =
          "translate3d(0, 100vh, 0)";
        ref.current.children[0].children[0].style.transform =
          "translate3d(0, 100vh, 0)";
        ref.current.children[0].children[1].children[0].style.transform =
          "translate3d(-300%, 100vh, 0)";
        setSubIntroValue(true);
      }
    },
    [delay, duration, subIntroValue, setSubIntroValue, setIntersection, setMainAnimation]
  );

  useEffect(() => {
    let observer: any;

    if (ref.current) {
      observer = new IntersectionObserver(handleScroll, {
        threshold: 0.15,
        rootMargin: `0px 0px 0px 0px`,
      });
      observer.observe(ref.current);
    }

    return () => observer && observer.disconnect();
  }, [handleScroll, height]);

  return {
    ref,
    textStyle: {
      transform: "translate3d(0, 40vh, 0)",
    },
    imageStyle: {
      transform: "translate3d(-300%, 100%, 0)",
    },
  };
};

export default useScrollAnimation;
