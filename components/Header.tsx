/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import Link from "next/link";
import { color } from "../styles/theme";
import { layout } from "../styles/layout";
import { mq } from "../styles/mediaQueries";

const h1 = css({
  fontWeight: "bold",
  a: {
    color: "#000",
    textDecoration: "none",
  },
});

const header = css(
  mq({
    padding: ["15px 20px", "10px 0 10px 40px"],
  })
);

const inner = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  maxWidth: layout.maxWidth,
  margin: "0 auto",
});

const menu = css(
  mq({
    display: ["none", "flex"],
    li: {
      a: {
        marginRight: 40,
        padding: "10px 0",
        display: "block",
        fontSize: 15,
        color: color.gray[70],
        textDecoration: "none",
        "&:hover": {
          color: color.black,
          textDecoration: "underline",
        },
      },
    },
  })
);

export const Header = () => {
  return (
    <header css={header}>
      <div css={inner}>
        <h1 css={h1}>
          <Link href="/">mrble illustration</Link>
        </h1>
        {/* <nav>
          <ul css={menu}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/book">Book</Link>
            </li>
            <li>
              <Link href="/illustration">Illustration</Link>
            </li>
            <li>
              <Link href="/drawing">Drawing</Link>
            </li>
          </ul>
        </nav> */}
      </div>
    </header>
  );
};
