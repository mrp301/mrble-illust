import { css } from "@emotion/react";
import React, { VFC } from "react";
import { mq } from "@/styles/mediaQueries";
import Image from "next/image";
import { textStyles } from "@/styles";
import { color } from "@/styles/theme";

type Props = {
  title: string;
  opusNo: number;
  cover: {
    url: string;
    width: number;
    height: number;
  };
  createDate: string;
  createYear: string;
};

export type IllustListItemType = Props;

const IMG_HEIGHT = 220;

const IllustListItem: VFC<Props> = ({ title, opusNo, cover }) => {
  const width = Math.floor((cover.width * IMG_HEIGHT) / cover.height);
  return (
    <li css={styles.container(width)}>
      <div css={styles.imageContainer}>
        <Image
          src={`${cover.url}?fit=fill&w=${width * 2}&h=${IMG_HEIGHT * 2}`}
          alt={`${opusNo}_${title}`}
          width={width}
          height={IMG_HEIGHT}
          layout="responsive"
          blurDataURL={`${cover.url}?fit=thumb`}
          placeholder="blur"
          lazyBoundary={`${IMG_HEIGHT * 2}px`}
        />
      </div>
      <div css={[styles.body, styles.body, textStyles.small]}>
        <div css={styles.opusNo}>{opusNo}</div>
        <div css={styles.title}>{title}</div>
      </div>
    </li>
  );
};

const styles = {
  container: (width: number) =>
    css({
      width,
      flexGrow: width,
    }),
  imageContainer: css({
    overflow: "hidden",
    borderRadius: 8,
    border: `1px solid ${color.gray[30]}`,
  }),
  body: css(
    mq({
      display: ["none", "flex"],
      alignItems: "flex-start",
      padding: "4px 0 8px",
    })
  ),
  title: css({
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    fontWeight: "bold",
  }),
  opusNo: css({
    marginRight: 4,
  }),
};

export { IllustListItem };
