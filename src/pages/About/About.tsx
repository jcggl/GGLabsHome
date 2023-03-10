import React from "react";
import { AboutDescription, AboutHeader } from "@/components/About";
import { Footer } from "@/components/Common";

const About = () => {
  return (
    <section className="flex flex-col items-center w-full text-font-black pt-[clamp(123px,34.167vw,183px)] pad:pt-[clamp(225px,20.833vw,344px)] desktop:pt-[clamp(332px,17.292vw,398.4px)] pb-[clamp(183px,50.833vw,186px)] pad:pb-[clamp(281px,26.019vw,350px)] desktop:pb-[clamp(350px,18.229vw,420px)] px-[clamp(34px,9.444vw,166px)] pad:px-[clamp(222px,20.556vw,345px)] desktop:px-[clamp(440px,22.917vw,100vw)]">
      <div>
        <AboutHeader />
        <AboutDescription />
      </div>
    </section>
  );
};

export default About;
