import { css } from "@emotion/react";
import React, { FC } from "react";
import Link from "next/link";
import { layout } from "@/styles/layout";
import { mq } from "@/styles/mediaQueries";

type BgColor = "white" | "none";
type Theme = "light" | "dark";

type Props = {
  bgColor: BgColor;
  theme?: Theme;
} & JSX.IntrinsicElements["header"];

const backgroundColor = {
  white: "#fff",
  none: "rgba(0, 0, 0, 0)",
} as const;

const Header: FC<Props> = ({ bgColor, theme = "light", ...props }) => {
  return (
    <header css={styles.container(bgColor)} {...props}>
      <div css={styles.inner}>
        <h1 css={styles.title(theme)}>
          <Link href="/" passHref>
            <a>mrble illustration</a>
          </Link>
        </h1>
        <nav css={styles.navListContainer}>
          <ul css={styles.navList(theme)}>
            <li>
              <Link href="/" passHref>
                <a>Books</a>
              </Link>
            </li>
            <li>
              <Link href="/illustrations" passHref>
                <a>Illustrations</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const styles = {
  container: (bgColor: BgColor) =>
    css(
      mq({
        padding: ["12px 16px", "24px 32px"],
        backgroundColor: backgroundColor[bgColor],
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
        color: theme === "dark" ? "#fff" : "#000",
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
          color: theme === "dark" ? "#fff" : "#000",
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
