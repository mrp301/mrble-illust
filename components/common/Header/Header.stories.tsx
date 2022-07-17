import React from "react";
import { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { Header } from "./Header";
import { lightColor } from "@/constants";

export default {
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: lightColor.glay.light }}>
        <Story />
      </div>
    ),
  ],
  render: (args) => <Header {...args} />,
} as ComponentMeta<typeof Header>;

export const BgWhite: ComponentStoryObj<typeof Header> = {
  args: {
    bgColor: true,
  },
};

export const BgNone: ComponentStoryObj<typeof Header> = {
  args: {
    bgColor: false,
  },
};
