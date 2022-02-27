import React, { VFC } from "react";
import { css } from "@emotion/react";
import { Props as TagListItemType, TagListItem } from "./TagListItem";

type Props = {
  list: TagListItemType[];
};

export const TagList: VFC<Props> = ({ list }) => {
  return (
    <ul css={container}>
      {list.map((item, index) => (
        <li key={index}>
          <TagListItem {...item} />
        </li>
      ))}
    </ul>
  );
};

const container = css({
  display: "flex",
  gap: 8,
  flexWrap: "wrap",
});
