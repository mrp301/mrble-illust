import React from "react";
import { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { Button } from "./Button";

export default {
  component: Button,
  render: (args) => <Button {...args} />,
} as ComponentMeta<typeof Button>;

export const Default: ComponentStoryObj<typeof Button> = {
  args: {
    children: "テキスト",
  },
};
