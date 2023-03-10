import { ComponentMeta, ComponentStory } from "@storybook/react";

import linkedin from "@/assets/svg/linkedin-lg.svg";

import SNSIcon from "./SNSIcon";

export default {
  title: "Components/Common/SNSIcon",
  component: SNSIcon,
  decorators: [
    (Story) => (
      <div
        style={{
          padding: "1rem 1rem 1rem 1rem",
          backgroundColor: "black",
          height: "100px",
          width: "100px"
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    componentSubtitle: "SNSIcon Component",
  },
} as ComponentMeta<typeof SNSIcon>;

export const Default: ComponentStory<typeof SNSIcon> = (args) => <SNSIcon {...args} />;

Default.args = {
  href: "#",
  alt: "#",
  imgSrc: linkedin,
};
