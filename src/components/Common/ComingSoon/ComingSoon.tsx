import React from 'react'
import comingSoon from "@/assets/svg/technology/coming-soon.svg";

const ComingSoon = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-black w-full h-full text-main-white">
      <img
        className="w-[clamp(28px,7.778vw,58px)] pad:w-[clamp(58px,5.370vw,84.56px)] desktop:w-[clamp(70px,3.646vw,84px)]"
        src={comingSoon}
        alt="Coming soon"
        loading="lazy"
      />
      <h3 className="font-bold text-[clamp(22px,6.111vw,45px)] pad:text-[clamp(36px,3.333vw,52.488px)] desktop:text-[clamp(50px,2.604vw,60px)] mt-[clamp(11.76px,3.267vw,23px)] pad:mt-[clamp(32px,2.963vw,46.65px)] desktop:mt-[clamp(30px,1.563vw,36px)] leading-[100%]">
        Coming soon!
      </h3>
      <h4 className="mt-[clamp(16.53px,4.592vw,33.5px)] pad:mt-[clamp(29px,2.685vw,42.28px)] desktop:mt-[clamp(36px,1.875vw,43.2px)] pad:mt-[clamp(29px,2.685vw,42.28px)] text-sub-grey text-center text-[clamp(10px,2.778vw,21px)] pad:text-[clamp(12px,1.111vw,17.5px)] desktop:text-[clamp(16px,0.833vw,19.2px)] leading-[150%] pad:leading-[180%] desktop:leading-[162%]">
        We are currently working on creating examples of it
        <br />
        We'll be here soon. Stay tuned
      </h4>
    </div>
  );
}

export default ComingSoon