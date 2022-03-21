import { css } from "@emotion/react";
import React, { VFC } from "react";
import { mq } from "@/styles/mediaQueries";
import Image from "next/image";
import Link from "next/link";
import { textStyles } from "@/styles";
import { colors } from "@/constants";
import { color } from "@/styles/theme";
import dayjs from "dayjs";

export type BookListItemType = {
  title: string;
  slug: string;
  cover: {
    url: string;
    width: number;
    height: number;
  };
  event: string;
  releaseDate: string;
};

const BookListItem: VFC<BookListItemType> = ({
  title,
  slug,
  cover,
  event,
  releaseDate,
}) => {
  return (
    <li css={styles.container}>
      <Link href={`/book/detail/${slug}`} passHref>
        <a>
          <div css={styles.coverContainer}>
            <Image
              src={cover.url}
              alt={title}
              width={cover.width}
              height={cover.height}
              layout={"responsive"}
              blurDataURL={`${cover.url}?fit=thumb`}
              placeholder="blur"
            />
          </div>
          <div css={styles.body}>
            <div css={[styles.title, textStyles.large]}>{title}</div>
            <div css={[bookRelease, textStyles.xsmall]}>
              {dayjs(releaseDate).format("YYYY年M月D日")}
            </div>
            <div css={[bookEvent, textStyles.xsmall]}>{event}</div>
          </div>
        </a>
      </Link>
    </li>
  );
};

const styles = {
  container: css({
    "&:hover": {
      cursor: "pointer",
      opacity: 0.8,
    },
    a: {
      textDecoration: "none",
    },
  }),
  coverContainer: css({
    borderRadius: 8,
    border: `1px solid ${color.gray[30]}`,
    overflow: "hidden",
  }),
  body: css(
    mq({
      display: ["none", "block"],
      padding: "8px 0",
    })
  ),
  title: css({
    color: colors.black,
    fontWeight: "bold",
    "&:hover": {
      textDecoration: "underline",
    },
  }),
};

const bookRelease = css({
  color: colors.glay,
});

const bookEvent = css({
  color: colors.glay,
});

export { BookListItem };
