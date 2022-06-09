import { css } from "@emotion/react";
import React, { FC } from "react";
import { mq } from "@/styles/mediaQueries";
import Image from "next/image";
import Link from "next/link";
import { textStyles } from "@/styles";
import { color } from "@/styles/theme";
import { colors } from "@/constants";

type Props = {
  title: string;
  opusNo: number;
  image: {
    url: string;
    width: number;
    height: number;
  };
  createDate: string;
  createYear: string;
};

export type IllustListItemType = Props;

const IMG_HEIGHT = 220;

const IllustListItem: FC<Props> = ({ title, opusNo, image }) => {
  const width = Math.floor((image.width * IMG_HEIGHT) / image.height);
  return (
    <li css={styles.container(width)}>
      <Link href={`/illustrations/${opusNo}`} passHref>
        <a>
          <div css={styles.imageContainer}>
            <Image
              src={`${image.url}?fit=fill&w=${width * 2}&h=${IMG_HEIGHT * 2}`}
              alt={`${opusNo}_${title}`}
              width={width}
              height={IMG_HEIGHT}
              layout="responsive"
              blurDataURL={`${image.url}?fit=thumb`}
              placeholder="blur"
              lazyBoundary={`${IMG_HEIGHT * 2}px`}
            />
          </div>
          <div css={[styles.body, styles.body, textStyles.small]}>
            <div css={styles.opusNo}>{opusNo}</div>
            <div css={styles.title}>{title}</div>
          </div>
        </a>
      </Link>
    </li>
  );
};

const styles = {
  container: (width: number) =>
    css({
      width,
      flexGrow: width,
      "&:hover": {
        cursor: "pointer",
        opacity: 0.8,
      },
      a: {
        textDecoration: "none",
        color: colors.black,
      },
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
    "&:hover": {
      textDecoration: "underline",
    },
  }),
  opusNo: css({
    marginRight: 4,
  }),
};

export { IllustListItem };
