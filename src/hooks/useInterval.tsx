import { useEffect, useRef } from "react";

type RefType = () => void;

const useInterval = (callback: () => void, delay: number|null): void => {
  //리랜더링 시 무한 반복을 막기 위해 useRef 활용
  const savedCallback = useRef<RefType>(callback);

  //useEffect 내부에서 콜백함수 업데이트
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };

    if (delay !== null) {
      let timer = setInterval(tick, delay);
      return () => clearInterval(timer);
    }
  }, [delay]);
};

export default useInterval;
