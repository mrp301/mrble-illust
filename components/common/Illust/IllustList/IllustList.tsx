import { css } from "@emotion/react";
import React, { FC } from "react";
import { mq } from "@/styles/mediaQueries";
import { IllustListItem, IllustListItemType } from "../IllustListItem";

type Props = {
  illustList: IllustListItemType[];
};

const IllustList: FC<Props> = ({ illustList }) => {
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
      display: "flex",
      flexWrap: "wrap",
      columnGap: 8,
      rowGap: 8,
      "&::after": {
        content: "''",
        flexGrow: 999999999,
      },
    })
  ),
};

export { IllustList };
