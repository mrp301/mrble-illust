/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { VFC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Card: VFC<Props> = ({ children }) => <div css={styles.container}>{children}</div>;

const styles = {
  container: css({
    borderRadius: 4,
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  }),
};

export { Card };
