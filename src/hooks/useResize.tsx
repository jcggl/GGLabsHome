import { useState, useCallback } from "react";
import { useEffect } from "react";
import { isReturnStatement } from "typescript";

const useResize = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [height, setHeight] = useState<number>(window.innerHeight);
  const resizeHandler = useCallback(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [resizeHandler]);

  return {
    width,
    height
  };
};

export default useResize;
