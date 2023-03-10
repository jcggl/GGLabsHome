import { useCallback, useEffect, useRef, useContext } from "react";
import TechHeightContext from "@/contexts/TechHeightContext";

const useResizeTechHeight = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { techHeightHandler } = useContext(TechHeightContext);

  const resizeHandler = useCallback(() => {
    const { current } = ref;
    if (current !== null) {
      techHeightHandler(current.clientHeight);
    }
  }, [techHeightHandler, ref]);

  useEffect(() => {
    const { current } = ref;
    if (current !== null) {
      techHeightHandler(current.clientHeight);
    }
  }, [techHeightHandler, ref]);

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, [resizeHandler]);

  return { ref };
};

export default useResizeTechHeight;
