import React, { useState, useEffect, useCallback } from "react";
import { useRef } from "react";
import useResize from "./useResize";
import { useLocation } from 'react-router-dom';
interface positionStyleType {
  transform: string;
  transition: string;
  OverflowY?: string;
}

const useScrollPagination = () => {
  const ref = useRef<any>();
  const [touch, setTouch] = useState<number | null>(null);
  const { height: pageHeight } = useResize();
  const [throttle, setThrottle] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);
  const [isFooter, setIsFooter] = useState<boolean>(false);
  const [timer, setTimer] = useState<any>([]);
  const location = useLocation()

  const [style, setStyle] = useState<positionStyleType>({
    transform: `translateY(0px)`,
    transition: "all 0.7s ease-in-out",
  });

  useEffect(() => {
    setPage(0)
    setStyle(() => {
      return {
        transform: `translateY(0px)`,
        transition: "all 0.7s ease-in-out",
      };
    });
    setTimeout(() => {
      setThrottle(false);
    }, 1110);
  }, [location]);

  useEffect(() => {
    setStyle((prev) => ({ ...prev, transform: `translateY(${page}px)` }));
  }, [page]);

  const handleTouchStart = useCallback(
    (e: React.TouchEvent<HTMLInputElement>): void => {
      const currentTouch = e.touches[0].clientY;
      setTouch(currentTouch);
    },
    []
  );
  const touchScrollHandler = useCallback(
    (e: React.TouchEvent<HTMLInputElement>): void => {
      e.preventDefault();
      const touchDown: number | null = touch;
      if (touchDown === null) return;
      if (throttle) return;
      setTouch(null);
      setThrottle(true);
      setTimeout(() => {
        setThrottle(false);
      }, 1110);
      const footerMinus = page - ref.current.children[5].clientHeight;
      const footerPlus = page + ref.current.children[5].clientHeight;
      const minusScroll = page - pageHeight;
      const plusScroll = page + pageHeight;
      const currentTouch = e.touches[0].clientY;
      const touchDirection = touchDown - currentTouch;
      if (!throttle && touchDown) {
        if (touchDirection > 4) {
          //아래로 스크롤;
          if (page <= 0 && page > -pageHeight * 4) {
            setPage(minusScroll);
          } else if (page === -pageHeight * 4 && !isFooter) {
            setPage(footerMinus);
            setIsFooter(true);
          }
        } else if (touchDirection < -4) {
          //위로 스크롤
          if (isFooter) {
            setPage(footerPlus);
            setIsFooter(false);
          } else if (page < 0) {
            // movePage(pageHeight);
            setPage(plusScroll);
          }
        }
      }
    },
    [isFooter, page, pageHeight, throttle, touch]
  );

  const wheelHandler = useCallback(
    (e: React.WheelEvent) => {
      e.preventDefault();
      // const pageHeight = ref.current.clientHeight;
      const scrollDown: boolean = e.deltaY > 0;
      const scrollUp: boolean = e.deltaY <= 0;
      const copyThrottle = throttle;
      const newTimer = timer;

      if (copyThrottle) return;

      timer.forEach((item: any) => {
        clearTimeout(item);
      });
      setTimer([]);
      setThrottle(true);
      let t = setTimeout(() => {
        setThrottle(false);
      }, 1410);
      setTimer([...newTimer, t]);

      const footerMinus = page - ref.current.children[5].clientHeight;
      const footerPlus = page + ref.current.children[5].clientHeight;
      const minusScroll = page - pageHeight;
      const plusScroll = page + pageHeight;
      if (!copyThrottle) {
        if (scrollDown) {
          //아래로 스크롤;
          if (page <= 0 && page > -pageHeight * 4) {
            setPage(minusScroll);
          } else if (page === -pageHeight * 4 && !isFooter) {
            setPage(footerMinus);
            setIsFooter(true);
          }
        } else if (scrollUp) {
          //위로 스크롤
          if (isFooter) {
            setPage(footerPlus);
            setIsFooter(false);
          } else if (page < 0) {
            // movePage(pageHeight);
            setPage(plusScroll);
          }
        }
      }
    },
    [isFooter, page, pageHeight, throttle, timer]
  );

  useEffect(() => {
    const refCurrent = ref.current;
    refCurrent.addEventListener("wheel", wheelHandler);
    refCurrent.addEventListener("touchstart", handleTouchStart);
    refCurrent.addEventListener("touchmove", touchScrollHandler);

    return () => {
      refCurrent.removeEventListener("wheel", wheelHandler);
      refCurrent.removeEventListener("touchstart", handleTouchStart);
      refCurrent.removeEventListener("touchmove", touchScrollHandler);
    };
  }, [wheelHandler, touchScrollHandler, handleTouchStart]);

  return { ref, style };
};

export default useScrollPagination;
