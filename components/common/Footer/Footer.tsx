import React, { VFC } from "react";
import { css } from "@emotion/react";
import { color } from "@/styles/theme";
import { layout } from "@/styles/layout";

const Footer: VFC = () => (
  <footer css={styles.container}>
    <div css={styles.inner}>
      <small css={styles.small}>@mrble Inc 2021</small>
    </div>
  </footer>
);

const styles = {
  container: css({
    width: "100%",
    padding: "16px",
    borderTop: `1px solid ${color.gray[30]}`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),
  inner: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: layout.maxWidth,
    margin: "0 auto",
  }),
  small: css({
    fontSize: 14,
    color: color.gray[60],
  }),
};

export { Footer };
