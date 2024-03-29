import React from "react";
import { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { BookListItem } from "./BookListItem";
import { css } from "@emotion/react";

const container = css({
  width: 200,
});

export default {
  component: BookListItem,
  render: (args) => (
    <div css={container}>
      <ul>
        <BookListItem {...args} />
      </ul>
    </div>
  ),
} as ComponentMeta<typeof BookListItem>;

export const Default: ComponentStoryObj<typeof BookListItem> = {
  args: {
    title: "乙女TIME",
    slug: "puri28",
    cover: {
      url: "/images/storybook/puri28_cover.jpeg",
      width: 724,
      height: 1024,
    },
    event: "コミックマーケット99",
    releaseDate: "2022年12月31日",
  },
};
