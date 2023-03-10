import { useState, useEffect, useCallback } from "react";

const useHideOnScroll = () => {
  //스크롤 중이면 setScroll을 true
  //true일 때는 opacity를 0으로 바꿈. false일 경우 1초 setTimeout을 지정 후 false로
  const [throttle, setThrottle] = useState<boolean>(false);
  const [scroll, setScroll] = useState<boolean>(false);
  // const [timer, setTimer] = useState<any>();
  const [prevScrollY, setPrevScrollY] = useState<number | null>(null);

  const navbarOpacityGenerator = useCallback(() => {
    setScroll((prev) => false);
  }, []);

  const navbarOpacityRemover = useCallback(() => {
    setScroll((prev) => true);
  }, []);

  const onScrollHandler = useCallback(() => {
    if (throttle) return;

    setThrottle((prev) => true);
    if (!prevScrollY) return;
    if (window.scrollY - prevScrollY > 3 && window.scrollY > 10)
      setScroll((prev) => true);
    else if (window.scrollY - prevScrollY < -3) setScroll((prev) => false);
  }, [throttle, prevScrollY]);

  useEffect(() => {
    setPrevScrollY((prev) => window.scrollY);

    let throttleTimer = setTimeout(() => {
      setThrottle(false);
    }, 10);

    window.addEventListener("scroll", onScrollHandler);
    return () => {
      window.removeEventListener("scroll", onScrollHandler);
      clearTimeout(throttleTimer);
    };
  }, [throttle, scroll, onScrollHandler]);

  return {
    style: scroll ? { opacity: 0, transition: ".2s ease-out" } : { opacity: 1 },
    navbarOpacityGenerator,
    navbarOpacityRemover,
  };
};

export default useHideOnScroll;
