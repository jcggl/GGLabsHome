import React from "react";
import SNSIcon from "@/components/Common/SNSIcon/SNSIcon";

import { SNS_LIST } from "./Footer.constants";
import { SNSListType } from "./Footer.types";

const Footer = () => {
  return (
    <footer className="relative translate-y-[0%] w-full bg-main-black flex h-[clamp(311px,86.389vw,450px)] pad:h-[clamp(185px,17.130vw,275px)] desktop:h-[clamp(330px,17.188vw,396px)] justify-center items-center px-[clamp(36px,10vw,54px)] pad:px-[clamp(159px,14.722vw,236px)] desktop:px-[clamp(263px,13.698vw,100vw)] z-[90]">
      <div className="flex text-main-white w-full h-full flex-col-reverse pad:flex-row justify-around pad:justify-between items-start pad:items-center">
        <div className="flex flex-col h-full pad:pt-[clamp(26px,2.407vw,39px)] desktop:pt-[clamp(76px,3.958vw,95px)]">
          <h3 className="h-[clamp(19px,5.278vw,27px)] pad:h-[clamp(27px,2.5vw,40px)] desktop:h-[clamp(22px,1.146vw,26.4px)] text-[clamp(12px,3.333vw,16px)] pad:text-[clamp(12px,1.111vw,18px)] desktop:text-[clamp(20px,1.042vw,24px)]">
            Contact us at:
          </h3>
          <a
            href="mailto:hello@goodganglabs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-extralight underline underline-offset-8 text-[clamp(16px,4.444vw,24px)] pad:text-[clamp(20px,1.852vw,30px)] desktop:text-[clamp(26px,1.354vw,31.2px)] mt-[clamp(12px,3.333vw,18px)] pad:mt-[clamp(8px,0.741vw,12px)] desktop:mt-[clamp(28px,1.458vw,33.6px)]"
          >
            hello@goodganglabs.com
          </a>
          <div className="text-[clamp(8px,2.222vw,12px)] pad:text-[clamp(10px,0.926vw,15px)] desktop:text-[clamp(16px,0.833vw,19.2px)] mt-[clamp(42px,11.667vw,63px)] pad:mt-[clamp(48px,4.444vw,72px)] desktop:mt-[clamp(62px,3.229vw,74.4px)]">
            © 2023 GoodGang Labs Pte. Ltd. All rights reserved.
          </div>
        </div>
        <div className="flex flex-col h-full pt-[clamp(32px,8.889vw,48px)] pad:pt-[clamp(26px,2.407vw,39px)] desktop:pt-[clamp(76px,3.958vw,95px)]">
          <div className="text-[clamp(12px,3.333vw,18px)] pad:text-[clamp(12px,1.111vw,18px)] desktop:text-[clamp(20px,1.042vw,24px)] leading-[150%] pad:leading-[170%]">
            Follow our social media for
            <br />
            the latest news and updates.
          </div>
          <div className="flex pt-[clamp(26px,7.222vw,30px)] pad:pt-[clamp(25px,2.315vw,37.5px)] desktop:pt-[clamp(25.33px,1.302vw,30px)] gap-x-[clamp(22px,6.111vw,27px)] pad:gap-x-[clamp(33px,3.056vw,48px)] desktop:gap-x-[clamp(60px,3.125vw,72px)] desktop:pl-[clamp(4px,0.208vw,10px)]">
            {SNS_LIST.map((item: SNSListType, index: number): JSX.Element => {
              return (
                <div
                  className="w-[clamp(19.5px,5.417vw,30px)] pad:w-[clamp(19.5px,1.806vw,30px)] desktop:w-[clamp(33.3px,1.734vw,40px)]"
                  key={`SNSIconFooter${index}`}
                >
                  <SNSIcon {...item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
