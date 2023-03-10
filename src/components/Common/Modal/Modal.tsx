import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "@/components/Common/ModalOverlay/ModalOverlay";
import ModalBackdrop from '@/components/Common/ModalBackdrop/ModalBackdrop';

const Modal = () => {
  useEffect(() => {
    document.body.style.cssText = `
    position: fixed; 
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);
  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverlay />,
        document.getElementById("overlay-root") as HTMLElement
      )}
      {ReactDOM.createPortal(
        <ModalBackdrop />,
        document.getElementById("backdrop-root") as HTMLElement
      )}
    </>
  );
};

export default Modal;
