import { ComponentMeta, ComponentStory } from "@storybook/react";

import Navbar from "./Navbar";

export default {
  title: "Components/Common/Navbar",
  component: Navbar,
  decorators: [
    (Story) => (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Story />
        </div>
      </>
    ),
  ],
  parameters: {
    componentSubtitle: "Navbar Component",
  },
} as ComponentMeta<typeof Navbar>;

export const Default: ComponentStory<typeof Navbar> = () => <Navbar />;

Default.args = {};
