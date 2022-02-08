/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { VFC } from "react";
import { color } from "../../styles/theme";
import { mq } from "../../styles/mediaQueries";
import Image from "next/image";
import Link from "next/link";

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
          <Image
            src={cover.url}
            alt={title}
            width={cover.width}
            height={cover.height}
            layout={"responsive"}
          />
          <div css={bookInfo}>
            <div css={bookTitle}>{title}</div>
            <div css={bookRelease}>{releaseDate}</div>
            <div css={bookEvent}>{event}</div>
          </div>
        </a>
      </Link>
    </li>
  );
};

const styles = {
  container: css({
    a: {
      textDecoration: "none",
    },
  }),
};

const bookInfo = css(
  mq({
    display: ["none", "block"],
    padding: "10px 10px 8px",
  })
);

const bookTitle = css({
  color: "#000",
  fontWeight: "bold",
  fontSize: 20,
  marginBottom: 8,
  "&:hover": {
    textDecoration: "underline",
  },
});

const bookRelease = css({
  fontSize: 14,
  color: color.gray[50],
  marginBottom: 5,
});

const bookEvent = css({
  fontSize: 14,
  color: color.gray[50],
});

export { BookListItem };
