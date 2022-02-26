import React from "react";
import { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { Heading } from "./Heading";

export default {
  component: Heading,
  render: (args) => <Heading {...args} />,
  argTypes: {
    tag: {
      options: ["h1", "h2", "h3"],
      control: {
        type: "inline-radio",
      },
    },
  },
  args: {
    children: "見出し見出し見出し",
  },
} as ComponentMeta<typeof Heading>;

export const Heading1: ComponentStoryObj<typeof Heading> = {
  args: {
    tag: "h1",
  },
};

export const Heading2: ComponentStoryObj<typeof Heading> = {
  args: {
    tag: "h2",
  },
};

export const Heading3: ComponentStoryObj<typeof Heading> = {
  args: {
    tag: "h3",
  },
};
