/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import Link from "next/link";
import { color } from "../styles/theme";
import { layout } from "../styles/layout";

const footer = css({
  width: "100%",
  padding: "30px 10px",
  borderTop: `1px solid ${color.gray[30]}`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const inner = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  maxWidth: layout.maxWidth,
  margin: "0 auto",
});

const small = css({
  fontSize: 14,
  color: color.gray[60],
});

export const Footer = () => {
  return (
    <footer css={footer}>
      <div css={inner}>
        <small css={small}>@mrble Inc 2021</small>
      </div>
    </footer>
  );
};
