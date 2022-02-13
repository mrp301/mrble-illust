/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { VFC, ReactNode } from "react";
import { colors } from "@/constants";

type Props = {
  children: ReactNode;
} & JSX.IntrinsicElements["button"];

const Button: VFC<Props> = ({ children, ...props }) => {
  return (
    <button css={styles.container} {...props}>
      {children}
    </button>
  );
};

const styles = {
  container: css({
    padding: "16px 24px",
    background: colors.black,
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 1,
    textAlign: "center",
    borderRadius: 50,
    border: "none",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  }),
};

export { Button };
