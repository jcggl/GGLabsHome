import { Route, Routes, useLocation } from "react-router-dom";

import { Home, About, Technology, Product, Team, Partners } from "@/pages";
import { GlobalLayout } from "@/components/Common";
import useRouteChecker from "@/hooks/useRouteChecker";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  //동적라우팅 Google Analytics 적용
  useRouteChecker();
  //쿠키 저장(IP, 국가 등)
  // useCollectCookie();

  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  useEffect(() => {
    if (location.pathname === "/") {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [location]);

  useEffect(() => {
    setScreenSize();
  });

  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Partners" element={<Partners />} />
        <Route path="/Technology" element={<Technology />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Team" element={<Team />} />
      </Route>
    </Routes>
  );
}

export default App;
