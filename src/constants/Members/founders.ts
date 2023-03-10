import JC from "@/assets/members/JC.webp";
import DK from "@/assets/members/DK.webp";
import SY from "@/assets/members/SY.webp";
import { MemberCardType } from '@/components/Team/MemberCard/MemberCard.types';

export const founders:MemberCardType[] = [
  {
    imgSrc: DK,
    role: "CEO / Co-Founder",
    name: "Dookyung Ahn",
    href: "https://www.linkedin.com/in/dookyung-ahn-33937b33/",
    alt: "Dookyung Ahn",
    hasLinkedIn: true,
  },
  {
    imgSrc: JC,
    role: "CTO / Co-Founder",
    name: "Jaecheol Kim",
    href: "https://www.linkedin.com/in/jc-kim-258b87b2/",
    alt: "Jaecheol Kim",
    hasLinkedIn: true,
  },
  {
    imgSrc: SY,
    role: "CCO / Co-Founder",
    name: "Seoyoung Kim",
    href: "https://www.linkedin.com/in/seo-young-kim-42859ab5/",
    alt: "Seoyoung Kim",
    hasLinkedIn: true,
  },
];
