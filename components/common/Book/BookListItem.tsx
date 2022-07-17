import { css } from "@emotion/react";
import React, { FC } from "react";
import { mq } from "@/styles/mediaQueries";
import Image from "next/image";
import Link from "next/link";
import { textStyles } from "@/styles";
import dayjs from "dayjs";
import { Theme } from "@/types/theme";

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

const BookListItem: FC<BookListItemType> = ({
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
            <div css={styles.title}>{title}</div>
            <div css={bookRelease}>{dayjs(releaseDate).format("YYYY年M月D日")}</div>
            <div css={bookEvent}>{event}</div>
          </div>
        </a>
      </Link>
    </li>
  );
};

const styles = {
  container: (theme: Theme) =>
    css({
      "&:hover": {
        cursor: "pointer",
        opacity: 0.8,
        color: theme.colors.text.main,
      },
      a: {
        textDecoration: "none",
      },
    }),
  coverContainer: (theme: Theme) =>
    css({
      borderRadius: 8,
      border: `1px solid ${theme.colors.glay.lighter}`,
      overflow: "hidden",
    }),
  body: css(
    mq({
      display: ["none", "block"],
      padding: "8px 0",
    })
  ),
  title: (theme: Theme) =>
    css(
      [
        {
          color: theme.colors.text.main,
          fontWeight: "bold",
          "&:hover": {
            textDecoration: "underline",
          },
        },
      ],
      textStyles.large
    ),
};

const bookRelease = (theme: Theme) =>
  css([
    {
      color: theme.colors.text.main,
    },
    textStyles.xsmall,
  ]);

const bookEvent = (theme: Theme) =>
  css([
    {
      color: theme.colors.text.main,
    },
    textStyles.xsmall,
  ]);

export { BookListItem };
