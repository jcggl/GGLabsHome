import { ComponentMeta, ComponentStory } from "@storybook/react";

import HiringButton from "./HiringButton";

export default {
  title: "Components/Common/HiringButton",
  component: HiringButton,
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "black",
          height: "100vh"
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    componentSubtitle: "HiringButton Component",
  },
} as ComponentMeta<typeof HiringButton>;

export const Default: ComponentStory<typeof HiringButton> = (args) => (
  <HiringButton {...args} />
);

Default.args = {
  animationStyle: {
    transform: "translate3d(0, 36vh, 0)",
  },
};
