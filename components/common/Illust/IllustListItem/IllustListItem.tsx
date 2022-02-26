import { css } from "@emotion/react";
import React, { VFC } from "react";
import { mq } from "@/styles/mediaQueries";
import Image from "next/image";
import { textStyles, fontWeight } from "@/styles";

type Props = {
  title: string;
  opusNo: number;
  cover: {
    url: string;
    width: number;
    height: number;
  };
};

export type IllustListItemType = Props;

const IllustListItem: VFC<Props> = ({ title, opusNo, cover }) => {
  return (
    <li>
      <div css={styles.imageContainer}>
        <Image
          src={`${cover.url}?f=faces&fit=fill&w=408&h=408`}
          alt={`${opusNo}_${title}`}
          width={204}
          height={204}
          css={styles.image}
          layout="responsive"
        />
      </div>
      <div css={[styles.body, textStyles.large]}>
        <div css={[textStyles.medium, styles.opusNo]}>{opusNo}</div>
        <div css={[fontWeight.bold]}>{title}</div>
      </div>
    </li>
  );
};

const styles = {
  imageContainer: css(
    mq({
      overflow: "hidden",
      borderRadius: 8,
      height: ["auto", 204],
    })
  ),
  image: css({
    objectFit: "cover",
  }),
  body: css(
    mq({
      display: ["none", "flex"],
      alignItems: "center",
      padding: "8px 0",
    })
  ),
  opusNo: css({
    marginRight: 4,
  }),
};

export { IllustListItem };
