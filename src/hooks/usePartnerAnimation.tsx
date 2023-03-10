import { intersectionState, partnerState, wallState } from "@/store/atoms";
import { useCallback, useRef, useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

const usePartnerAnimation = (duration: number = 1, delay: number = 0) => {
  const ref = useRef<any>();
  const [partner, setPartner] = useRecoilState(partnerState);
  const setIntersection = useSetRecoilState(intersectionState);
  const setWall = useSetRecoilState(wallState);

  const handleScroll = useCallback(
    ([entry]: any) => {
      if (entry.isIntersecting && partner) {
        for (let i = 0; i < 2; i++) {
          ref.current.children[i].style.transitionProperty = "all";
          ref.current.children[i].style.transitionDuration = `${duration}s`;
          ref.current.children[i].style.transitionTimingFunction =
            "cubic-bezier(0, 0, 0.58, 1)";
          ref.current.children[i].style.transitionDelay = `${delay}s`;
        }
        ref.current.children[0].style.transform = "translate3d(0,0,0)";
        ref.current.children[1].style.transform = "translate3d(0,0,0)";
        setTimeout(() => {
          setIntersection(false);
          setWall(() => false);
        }, 310)
      } else if (!partner) {
        ref.current.children[0].style.transform = "translate3d(0,-15vh,0)";
        ref.current.children[1].style.transform = "translate3d(0,-15vh,0)";
        setPartner(true);
      }
    },
    [duration, delay, setIntersection, partner, setPartner, setWall]
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
    style: {
      transform: "translate3d(0,-15vh,0)",
    },
  };
};

export default usePartnerAnimation;
