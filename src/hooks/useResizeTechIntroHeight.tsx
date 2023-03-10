import React, { useRef, useContext, useEffect, useCallback } from "react";
import TechHeightContext from "@/contexts/TechHeightContext";

const useResizeTechIntroHeight = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { introHeightHandler } = useContext(TechHeightContext);

  const resizeHandler = useCallback(() => {
    const { current } = ref;
    if (current !== null) {
      introHeightHandler(current.clientHeight);
    }
  }, [introHeightHandler, ref]);

  useEffect(() => {
    const { current } = ref;
    if (current !== null) {
      introHeightHandler(current.clientHeight);
    }
  }, [introHeightHandler, ref]);

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, [resizeHandler]);

  return { ref };
};

export default useResizeTechIntroHeight