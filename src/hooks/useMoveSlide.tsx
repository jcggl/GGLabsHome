import { useState, useRef, useEffect } from "react";

interface positionStyleType {
  marginLeft: string;
  transition: string;
}

const useMoveSlide = (imageSize: number) => {
  const imgSize = useRef<number>(imageSize);
  const [current, setCurrent] = useState<number>(1);
  const [style, setStyle] = useState<positionStyleType>({
    marginLeft: `-${current}00%`,
    transition: "all 0.3s ease-out",
  });
  const [throttle, setThrottle] = useState<boolean>(false);
  const [timer, setTimer] = useState<any>();
  const moveSlide = (index: number): void => {
    if (imageSize <= 3) return;
    if (throttle) return
    
    clearTimeout(timer);
    setTimer(setTimeout(() => {
      setThrottle(false);
    }, 600));

    let nextIndex: number = current + index;

    //앞 뒤로 복사된 크기에서 원본 사진 개수만큼 인덱스 이동
    if (nextIndex < 0) nextIndex += imgSize.current - 1;
    else if (nextIndex >= imgSize.current) nextIndex -= imgSize.current - 1;
    setThrottle(true);
    setCurrent(nextIndex);
  };

  useEffect(() => {
    setStyle((prev) => ({ ...prev, marginLeft: `-${current}00%` }));
  }, [current]);

  //0.3초의 transition을 잠깐 없애고 양 끝이 아니라면 transition을 다시 적용.
  useEffect(() => {
    if (current === 0) {
      let timer = setTimeout(() => {
        setCurrent((prev) => imgSize.current - 2);
        setStyle((prev) => ({ ...prev, transition: "" }));
      }, 300);
      return () => clearTimeout(timer);
    } else if (current === imgSize.current - 1) {
      let timer = setTimeout(() => {
        setCurrent((prev) => 1);
        setStyle((prev) => ({ ...prev, transition: "" }));
      }, 300);
      return () => clearTimeout(timer);
    } else if (current === 1 || current === imgSize.current - 2) {
      let timer = setTimeout(() => {
        setStyle((prev) => ({ ...prev, transition: "all 0.3s ease-out" }));
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [current]);

  return { moveSlide, style, current };
};

export default useMoveSlide;
