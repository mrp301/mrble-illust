/** @jsxImportSource @emotion/react */
import React, { FC } from "react";
import { jsx, css } from "@emotion/react";

const Card: FC = ({ children }) => <div css={styles.container}>{children}</div>;

const styles = {
  container: css({
    borderRadius: 4,
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  }),
};

export { Card };
