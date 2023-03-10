import React from "react";
import { TechnologyIntro, TechnologyVision, OurSolutions } from "@/components/Technology";

const Technology = () => {
  return (
    <section>
      <TechnologyIntro />
      {/* <DemoVideo /> */}
      <TechnologyVision/>
      <OurSolutions />
    </section>
  );
};

export default Technology;
