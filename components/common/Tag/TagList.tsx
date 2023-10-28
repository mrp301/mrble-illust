import { FC } from "react";
import { css } from "@emotion/react";
import { Props as TagListItemType, TagListItem } from "./TagListItem";
import { mq } from "@/styles/mediaQueries";

type Props = {
  list: TagListItemType[];
};

export const TagList: FC<Props> = ({ list }) => {
  return (
    <ul css={styles.tagList}>
      {list.map((item, index) => (
        <li key={index}>
          <TagListItem {...item} />
        </li>
      ))}
    </ul>
  );
};

const styles = {
  tagList: css(
    mq({
      display: "flex",
      gap: 8,
      flexWrap: ["no-wrap", "wrap"],
      overflowX: ["scroll", "visible"],
      "li:last-child": {
        marginRight: [16, 0],
      },
    })
  ),
};
