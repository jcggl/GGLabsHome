import { useState, useRef, useEffect, useCallback } from "react";

import useResize from './useResize';

interface positionStyleType {
  marginLeft: string;
  transition: string;
}

interface contentWidthType {
  width: string;
}

const useAutoSlide = (imageSize: number) => {
  const {width:windowWidth} = useResize();
   const imgSize = useRef<number>(imageSize);
  const [current, setCurrent] = useState<number>(0);
  const [style, setStyle] = useState<positionStyleType>({
    marginLeft: `-${current}00%`,
    transition: "all 0.5s ease-out",
  });

  const initialLogoHandler = useCallback((index:number) => {
    setCurrent(index)
  },[])

  /**
   * 윈도우 크기에 따라 화면에 보이는 파트너 갯수
   */
  const contentsNumberChecker = useCallback(():number => {
    if (1080 > windowWidth) return 2
    if (1080 <= windowWidth && 1920 > windowWidth) return 4
    if (1920 <= windowWidth) return 6
    return 6
  }, [windowWidth])
  const [contentWidth, setContentWidth] = useState<contentWidthType>({width:`${windowWidth/contentsNumberChecker()}px`})
  
  const moveSlide = (index: number): void => {
    let nextIndex: number = current + index;
    if(current === imgSize.current/2) nextIndex = 0;
    setCurrent(nextIndex);
  };

  useEffect(() => {
    setStyle((prev) => ({ ...prev, marginLeft: `-${current*(windowWidth/(contentsNumberChecker()*2))}px` }));
  }, [current, windowWidth, contentsNumberChecker]);

  useEffect(() => {
    setContentWidth((prev) => { return {width:`${windowWidth/contentsNumberChecker()}px`}})
  }, [windowWidth, contentsNumberChecker])

  //0.3초의 transition을 잠깐 없애고 양 끝이 아니라면 transition을 다시 적용.
  useEffect(() => {
    if (current === imgSize.current/2) {
      let timer = setTimeout(() => {
        setStyle((prev) => ({ ...prev, transition: "" }));
        setCurrent(0);
      }, 500);
      return () => clearTimeout(timer);
    } else if (current === 0) {
      let timer = setTimeout(() => {
        setStyle((prev) => ({
          ...prev,
          transition: "all 0.5s ease-out",
        }));
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [current]);

  return { moveSlide, style, current, contentWidth, initialLogoHandler };
};

export default useAutoSlide;
