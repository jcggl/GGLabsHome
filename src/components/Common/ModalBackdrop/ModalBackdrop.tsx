import React, { useEffect, useState } from "react";
import NavigationContext from "@/contexts/NavigationContext";
import { useContext } from "react";
import modalBackground from "@/assets/common/modal-background.svg";

const ModalBackdrop = () => {
  const { toggle } = useContext(NavigationContext);
  const [animate, setAnimate] = useState<boolean>(false);
  useEffect(() => {
    let timer: any;
    if (!toggle) {
      timer = setTimeout(() => setAnimate(false), 200);
    }
    
    setAnimate(true);
    return () => clearTimeout(timer);
  }, [toggle]);

  if (!toggle && !animate) return null;
  return (
    <div
      className={`pad:hidden fixed top-0 left-0 w-full h-screen z-[91] bg-[#1A1A1A] ${
        toggle
          ? "animate-[fadeIn_.3s_ease-in-out]"
          : "animate-[fadeOut_.3s_ease-in-out]"
      }`}
    >
      <img
        className="fixed top-0 left-0 w-full h-screen object-cover"
        src={modalBackground}
        alt="모달 백그라운드 이미지"
        loading="lazy"
      />
    </div>
  );
};

export default ModalBackdrop;
