import React, { useContext, useEffect } from "react";
import { Navbar, Footer } from "@/components/Common";
import { Outlet, useLocation } from "react-router-dom";
import Modal from "@/components/Common/Modal/Modal";
import NavigationContext from "@/contexts/NavigationContext";
import useResetScroll from "@/hooks/useResetScroll";

const GlobalLayout = () => {
  const { pathname } = useLocation();
  const { toggle } = useContext(NavigationContext);
  useResetScroll()
  return (
    <div>
      <Navbar />
      {toggle && <Modal />}
      <Outlet />
      {pathname !== "/" && <Footer />}
    </div>
  );
};

export default GlobalLayout;
