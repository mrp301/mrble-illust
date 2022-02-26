import React from "react";
import { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { Breadcrumb } from "./Breadcrumb";

export default {
  component: Breadcrumb,
  render: (args) => <Breadcrumb {...args} />,
} as ComponentMeta<typeof Breadcrumb>;

export const Default: ComponentStoryObj<typeof Breadcrumb> = {
  args: {
    items: [
      {
        slug: "/page1",
        text: "ページ1",
      },
      {
        slug: "/page2",
        text: "ページ2",
      },
      {
        slug: "/page3",
        text: "ページ3",
      },
    ],
  },
};
