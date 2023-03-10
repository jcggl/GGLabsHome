import { Footer } from "@/components/Common";
import {
  JoinUs,
  MainIntro,
  OurPartners,
  SubIntro,
  WebThreeIntro,
} from "@/components/Home";
import { TouchScrollProvider } from "@/contexts/TouchScrollContext";
import useScrollPagination from "@/hooks/useScrollPagination";
import { Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {

  const { ref: scrollRef, style } = useScrollPagination();
  return (
    <TouchScrollProvider>
      <Suspense fallback={null}>
        <div
          ref={scrollRef}
          className={`bg-[#1A1A1A] overflow-hidden touch-none`}
          style={style}
        >
          <MainIntro />
          <SubIntro />
          <WebThreeIntro />
          <OurPartners />
          <JoinUs />
          <Footer />
        </div>
      </Suspense>
    </TouchScrollProvider>
  );
};

export default Home;
