/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { VFC } from "react";
import { mq } from "@/styles/mediaQueries";
import { IllustListItem, IllustListItemType } from "../IllustListItem";

type Props = {
  illustList: IllustListItemType[];
};

const IllustList: VFC<Props> = ({ illustList }) => {
  return (
    <ul css={styles.conatiner}>
      {illustList.map((illust) => (
        <IllustListItem key={illust.title} {...illust} />
      ))}
    </ul>
  );
};

const styles = {
  conatiner: css(
    mq({
      display: "grid",
      gridTemplateColumns: ["repeat(2, 1fr)", "repeat(auto-fit, minmax(204px, 4fr))"],
      columnGap: [8, 16],
      rowGap: [16, 32],
    })
  ),
};

export { IllustList };
