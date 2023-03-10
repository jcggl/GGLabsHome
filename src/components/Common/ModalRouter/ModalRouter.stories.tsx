import { ComponentMeta, ComponentStory } from "@storybook/react";

import ModalRouter from "./ModalRouter";

export default {
  title: "Components/Common/ModalRouter",
  component: ModalRouter,
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "black",
          height: "100vh",
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    componentSubtitle: "ModalRouter Component",
  },
} as ComponentMeta<typeof ModalRouter>;

export const Default: ComponentStory<typeof ModalRouter> = () => (
  <ModalRouter/>
);

Default.args = {};
