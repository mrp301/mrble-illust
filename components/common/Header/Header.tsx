import { css } from "@emotion/react";
import React, { FC } from "react";
import Link from "next/link";
import { layout } from "@/styles/layout";
import { mq } from "@/styles/mediaQueries";
import { Theme } from "@/types/theme";

type Props = {
  bgColor?: boolean;
} & JSX.IntrinsicElements["header"];

const Header: FC<Props> = ({ bgColor = true, ...props }) => {
  return (
    <header css={(theme) => styles.container(bgColor, theme)} {...props}>
      <div css={styles.inner}>
        <h1 css={styles.title}>
          <Link href="/">mrble illustration</Link>
        </h1>
        <nav css={styles.navListContainer}>
          <ul css={styles.navList}>
            <li>
              <Link href="/">Books</Link>
            </li>
            <li>
              <Link href="/illustrations">Illustrations</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const styles = {
  container: (bgColor: boolean, theme: Theme) =>
    css(
      mq({
        padding: ["12px 16px", "24px 32px"],
        backgroundColor: bgColor ? theme.colors.baseColor : "transparent",
      })
    ),
  inner: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: layout.maxWidth,
    margin: "0 auto",
  }),
  title: (theme: Theme) =>
    css({
      fontSize: 15,
      fontWeight: "bold",
      a: {
        color: theme.colors.text.main,
        textDecoration: "none",
        ":hover": {
          textDecoration: "underline",
        },
      },
    }),
  navListContainer: css(
    mq({
      display: ["none", "block"],
    })
  ),
  navList: (theme: Theme) =>
    css({
      display: "flex",
      li: {
        fontSize: 15,
        ":not(:last-child)": {
          marginRight: 16,
        },
        a: {
          color: theme.colors.text.main,
          fontWeight: "bold",
          textDecoration: "none",
          ":hover": {
            textDecoration: "underline",
          },
        },
      },
    }),
};

export { Header };
