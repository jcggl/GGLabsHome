import { intersectionState, partnerState, subIntroState, wallState } from "@/store/atoms";
import { useRef, useCallback, useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

const useIntersectAnimation = (duration: number = 1, delay: number = 0) => {
  const ref = useRef<any>();
  const setSubIntro = useSetRecoilState(subIntroState);
  const setPartner = useSetRecoilState(partnerState);
  const setWall = useSetRecoilState(wallState);

  const [intersection, setIntersection] = useRecoilState(intersectionState);

  const handleScroll = useCallback(
    ([entry]: any) => {
      if (entry.isIntersecting) {
        for (let i = 0; i < 4; i++) {
          ref.current.children[i].style.transitionProperty = "all";
          ref.current.children[i].style.transitionDuration =
            // i % 2 ? `${duration}s` : `${duration * 1.5}s`;
            `${duration}s`;
          ref.current.children[i].style.transitionTimingFunction =
            "cubic-bezier(0, 0, 0.58, 1)";
          ref.current.children[i].style.transitionDelay = `${delay}s`;
          if (
            ref.current.children[4].style.transform !==
            "translate3d(0px, 0px, 0px)"
          ) {
            ref.current.children[i].style.transform =
              i % 2 ? "translateY(-5vh)" : "translateY(-30vh)";
          }
        }

        ref.current.children[4].style.transitionProperty = "all";
        ref.current.children[4].style.transitionDuration = `${duration}s`;
        ref.current.children[4].style.transitionTimingFunction =
          "cubic-bezier(0, 0, 0.58, 1)";
        ref.current.children[4].style.transitionDelay = `${delay}s`;
        if (
          ref.current.children[4].style.transform !==
          "translate3d(0px, 0px, 0px)"
        ) {
          ref.current.children[4].style.transform = "translate3d(0,-5vh,0)";
          setTimeout(() => {
            ref.current.children[0].style.transform = "translateY(-20vh)";
            ref.current.children[1].style.transform = "translateY(0)";
            ref.current.children[2].style.transform = "translateY(-20vh)";
            ref.current.children[3].style.transform = "translateY(0)";
            ref.current.children[4].style.transform = "translate3d(0,0,0)";
            setSubIntro(false);
            setPartner(false);
            setWall(false)
          }, 700);
        }
      } else if (!intersection) {
        // for (let i=0; i < 5; i++) {
        //   ref.current.children[i].style.transitionDuration = `0s`;
        // }
        ref.current.children[0].style.transform = "translateY(278vh)";
        ref.current.children[1].style.transform = "translateY(224.8vh)";
        ref.current.children[2].style.transform = "translateY(207vh)";
        ref.current.children[3].style.transform = "translateY(120vh)";
        ref.current.children[4].style.transform =
          "translate3d(0px, 100vh, 0px)";
        setIntersection(true);
      }
    },
    [delay, duration, setSubIntro, intersection, setIntersection, setPartner, setWall]
  );

  useEffect(() => {
    let observer: any;

    if (ref.current) {
      observer = new IntersectionObserver(handleScroll, {
        threshold: 0.2,
        rootMargin: "0px 0px 0px 0px",
      });
      observer.observe(ref.current);
    }

    return () => observer && observer.disconnect();
  }, [handleScroll]);

  return {
    ref,
    FirstStyle: {
      transform: "translateY(278vh)",
      willChange: "transform",
    },
    SecondStyle: {
      transform: "translateY(224.8vh)",
      willChange: "transform",
    },
    ThirdStyle: {
      transform: "translateY(207vh)",
      willChange: "transform",
    },
    FourthStyle: {
      transform: "translateY(120vh)",
      willChange: "transform",
    },
    textStyle: {
      transform: "translate3d(0,100vh,0)",
      willChange: "transform",
    },
  };
};

export default useIntersectAnimation;
