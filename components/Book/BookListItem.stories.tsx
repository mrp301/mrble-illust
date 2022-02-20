import React from "react";
import { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { BookListItem } from "./BookListItem";

export default {
  component: BookListItem,
  render: (args) => <BookListItem {...args} />,
} as ComponentMeta<typeof BookListItem>;

export const Default: ComponentStoryObj<typeof BookListItem> = {
  args: {
    title: "タイトル",
    slug: "title",
    cover: {
      url: "",
      width: 724,
      height: 1024,
    },
    event: "コミックマーケット99",
    releaseDate: "2022年12月31日",
  },
};
