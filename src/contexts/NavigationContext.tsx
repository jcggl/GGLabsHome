import { createContext, useState, useCallback } from "react";

interface Props {
  children: JSX.Element;
}

interface NavigationType {
  toggle: boolean,
  toggleNavigation(): void,
  closeNavigation(): void,
}

const NavigationContext = createContext<NavigationType>({
  toggle: false,
  toggleNavigation: () => {},
  closeNavigation: () => {},
});


export const NavigationProvider = ({ children }: Props) => {
  const [toggle, setToggle] = useState<boolean>(false);
  
  const toggleNavigation = useCallback(():void => {
    setToggle((prev) => !prev)
  },[])

  const closeNavigation = useCallback((): void => {
    setToggle((prev) => false);
  }, []);
  
  const context = {
    toggle,
    toggleNavigation,
    closeNavigation,
  }
  
  return (
    <NavigationContext.Provider value={context}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContext;
