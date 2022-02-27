import React from "react";
import { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { TagListItem } from "./TagListItem";
import { css } from "@emotion/react";

const container = css({
  display: "flex",
  gap: 8,
  flexWrap: "wrap",
});

export default {
  component: TagListItem,
  render: (args) => (
    <ul css={container}>
      <li>
        <TagListItem {...args} />
      </li>
      <li>
        <TagListItem color="red">赤城あんな</TagListItem>
      </li>
      <li>
        <TagListItem color="pink">桃山みらい</TagListItem>
      </li>
      <li>
        <TagListItem color="purple">紫藤める</TagListItem>
      </li>
      <li>
        <TagListItem color="blue">青葉りんか</TagListItem>
      </li>
      <li>
        <TagListItem color="green">緑川さら</TagListItem>
      </li>
      <li>
        <TagListItem color="yellow">萌黄えも</TagListItem>
      </li>
      <li>
        <TagListItem color="glay">黒川すず</TagListItem>
      </li>
    </ul>
  ),
} as ComponentMeta<typeof TagListItem>;

export const Default: ComponentStoryObj<typeof TagListItem> = {
  args: {
    color: "brown",
    children: "虹ノ咲だいあ",
  },
};
