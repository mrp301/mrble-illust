import React from "react";
import { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { TextWithChevron } from "./TextWithChevron";

export default {
  component: TextWithChevron,
  render: (args) => <TextWithChevron {...args}>テキストテキストテキスト</TextWithChevron>,
} as ComponentMeta<typeof TextWithChevron>;

export const IconLeft: ComponentStoryObj<typeof TextWithChevron> = {
  args: {
    iconPosition: "right",
  },
};

export const IconRight: ComponentStoryObj<typeof TextWithChevron> = {
  args: {
    iconPosition: "left",
  },
};
