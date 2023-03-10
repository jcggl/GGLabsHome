import { SNSListType } from "./Footer.types";
import linkedin from "@/assets/svg/linkedin-lg.svg"
import twitter from "@/assets/svg/twitter-lg.svg"
import discord from "@/assets/svg/discord-lg.svg"
// import instagram from "@/assets/svg/instagram-lg.svg";

export const SNS_LIST: SNSListType[] = [
  {
    href: "https://www.linkedin.com/company/77745265/admin/",
    alt: "링크드인",
    imgSrc: linkedin,
  },
  {
    href: "https://twitter.com/GGLabs_Official",
    alt: "트위터",
    imgSrc: twitter,
  },
  // {
  //   href: "#",
  //   alt: "인스타그램",
  //   imgSrc: instagram,
  // },
  {
    href: "https://discord.gg/goodganglabs",
    alt: "디스코드",
    imgSrc: discord,
  },
];