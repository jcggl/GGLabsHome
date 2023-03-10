import { ComponentMeta, ComponentStory } from "@storybook/react";

import MemberInfo from "./MemberInfo";

export default {
  title: "Components/Team/MemberInfo",
  component: MemberInfo,
  parameters: {
    componentSubtitle: "MemberInfo Component",
  },
} as ComponentMeta<typeof MemberInfo>;

export const Default: ComponentStory<typeof MemberInfo> = (args) => (
  <MemberInfo {...args} />
);

Default.args = {
  role: "CEO / Co-Founder",
  name: "이름을 입력하세요.",
  href: "",
  hasLinkedIn: true
};
