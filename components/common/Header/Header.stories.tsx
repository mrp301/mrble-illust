import React from "react";
import { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { Header } from "./Header";
import { colors } from "@/constants";

export default {
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: colors.glay }}>
        <Story />
      </div>
    ),
  ],
  render: (args) => <Header {...args} />,
} as ComponentMeta<typeof Header>;

export const BgWhite: ComponentStoryObj<typeof Header> = {
  args: {
    bgColor: "white",
  },
};

export const BgNone: ComponentStoryObj<typeof Header> = {
  args: {
    bgColor: "none",
  },
};
