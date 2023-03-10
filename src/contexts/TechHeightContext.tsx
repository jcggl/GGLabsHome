import { createContext, useState, useCallback } from "react";

interface Props {
  children: JSX.Element;
}

interface TechHeightType {
  techHeight: number;
  introHeight: number;
  techHeightHandler(height: number): void;
  introHeightHandler(height: number): void;
}

const TechHeightContext = createContext<TechHeightType>({
  techHeight: 0,
  introHeight: 0,
  techHeightHandler: (height: number) => {},
  introHeightHandler: (height: number) => {},
});

export const TechHeightProvider = ({ children }: Props) => {
  const [techHeight, setTechHeight] = useState<number>(0);
  const [introHeight, setIntroHeight] = useState<number>(0);

  const techHeightHandler = useCallback((height:number): void => {
    setTechHeight((prev) => height)
  }, []);

  const introHeightHandler = useCallback((height: number): void => {
    setIntroHeight((prev) => height);
  }, []);

  const context = {
  techHeight,
  introHeight,
  techHeightHandler,
  introHeightHandler,
};

  return (
    <TechHeightContext.Provider value={context}>
      {children}
    </TechHeightContext.Provider>
  );
};

export default TechHeightContext;