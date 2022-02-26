import React from "react";
import { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { Button } from "./Button";

export default {
  component: Button,
  render: (args) => <Button {...args} />,
  argTypes: {
    layout: {
      options: ["auto", "fill"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as ComponentMeta<typeof Button>;

export const Default: ComponentStoryObj<typeof Button> = {
  args: {
    children: "テキスト",
    layout: "auto",
  },
};

export const Fill: ComponentStoryObj<typeof Button> = {
  args: {
    children: "テキスト",
    layout: "fill",
  },
};
