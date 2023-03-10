import { ComponentMeta, ComponentStory } from "@storybook/react";

import JC from "@/assets/members/JC.webp";

import MemberCard from "./MemberCard";

export default {
  title: "Components/Team/MemberCard",
  component: MemberCard,
  parameters: {
    componentSubtitle: "MemberCard Component",
  },
} as ComponentMeta<typeof MemberCard>;

export const Default: ComponentStory<typeof MemberCard> = (args) => (
  <MemberCard {...args} />
);

Default.args = {
  imgSrc: JC,
  role: "CEO / Co-Founder",
  name: "이름을 입력하세요.",
  href: "",
  alt: "인물",
  hasLinkedIn: true,
};
