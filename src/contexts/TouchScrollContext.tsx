import useResize from "@/hooks/useResize";
import { createContext, useState, useCallback } from "react";

interface Props {
  children: JSX.Element;
}

interface NavigationType {
  touchScrollHandler(e: React.TouchEvent<HTMLInputElement>): void;
  handleTouchStart(e: React.TouchEvent<HTMLInputElement>): void;
}

const TouchScrollContext = createContext<NavigationType>({
  touchScrollHandler: () => {},
  handleTouchStart: () => {},
});

export const TouchScrollProvider = ({ children }: Props) => {
  const [touch, setTouch] = useState<number | null>(null);
  const { height: pageHeight } = useResize();
  const [throttle, setThrottle] = useState<boolean>(false);
  const handleTouchStart = useCallback(
    (e: React.TouchEvent<HTMLInputElement>): void => {
      const currentTouch = e.touches[0].clientY;
      setTouch(currentTouch);
    },
    []
  );

  let isFirstPage: boolean =
    window.scrollY >= 0 && window.scrollY < pageHeight / 2;
  let isSecondPage: boolean =
    window.scrollY >= pageHeight / 2 &&
    window.scrollY < pageHeight * 2 - pageHeight / 2;
  let isThirdPage: boolean =
    window.scrollY >= pageHeight * 2 - pageHeight / 2 &&
    window.scrollY < pageHeight * 3 - pageHeight / 2;
  let isFourthPage: boolean =
    window.scrollY >= pageHeight * 3 - pageHeight / 2 &&
    window.scrollY < pageHeight * 4 - pageHeight / 2;
  let isFifthPage: boolean =
    window.scrollY >= pageHeight * 4 - pageHeight / 2 &&
    window.scrollY < pageHeight * 4 + pageHeight / 2;
  let isFooter: boolean = window.scrollY >= pageHeight * 4 + pageHeight / 2;

  const touchScrollHandler = useCallback(
    (e: React.TouchEvent<HTMLInputElement>): void => {
      const touchDown: number | null = touch;
      if (touchDown === null) return;
      if (throttle) return;

      const currentTouch = e.touches[0].clientY;
      const touchDirection = touchDown - currentTouch;
      if (touchDirection > 4) {
        //아래로 스크롤;
        if (isFirstPage) {
          //현재 1페이지
          window.scrollTo({
            top: pageHeight,
            behavior: "smooth",
          });
        } else if (isSecondPage) {
          window.scrollTo({
            top: pageHeight * 2,
            behavior: "smooth",
          });
        } else if (isThirdPage) {
          window.scrollTo({
            top: pageHeight * 3,
            behavior: "smooth",
          });
        } else if (isFourthPage) {
          window.scrollTo({
            top: pageHeight * 4,
            behavior: "smooth",
          });
        } else if (isFifthPage) {
          window.scrollTo({
            top: pageHeight * 5,
            behavior: "smooth",
          });
        }
      } else if (touchDirection < -4) {
        //위로 스크롤
        if (isSecondPage) {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        } else if (isThirdPage) {
          window.scrollTo({
            top: pageHeight,
            behavior: "smooth",
          });
        } else if (isFourthPage) {
          window.scrollTo({
            top: pageHeight * 2,
            behavior: "smooth",
          });
        } else if (isFifthPage) {
          window.scrollTo({
            top: pageHeight * 3,
            behavior: "smooth",
          });
        } else if (isFooter) {
          window.scrollTo({
            top: pageHeight * 4,
            behavior: "smooth",
          });
        }
      }
      setThrottle(true);
      setTimeout(() => {
        setThrottle(false);
      }, 1500);

      setTouch(null);
    },
    [
      touch,
      isFirstPage,
      isSecondPage,
      isThirdPage,
      isFourthPage,
      isFifthPage,
      isFooter,
      throttle,
      pageHeight,
    ]
  );

  const context = {
    touchScrollHandler,
    handleTouchStart,
  };

  return (
    <TouchScrollContext.Provider value={context}>
      {children}
    </TouchScrollContext.Provider>
  );
};

export default TouchScrollContext;
