import { css } from "@emotion/react";
import React, { VFC, ReactNode } from "react";
import { colors } from "@/constants";

type Layout = "fill" | "auto";
type Priority = "primary" | "normal";
type Props = {
  priority?: Priority;
  layout?: Layout;
  children: ReactNode;
} & JSX.IntrinsicElements["button"];

const Button: VFC<Props> = ({
  priority = "normal",
  children,
  layout = "auto",
  ...props
}) => {
  return (
    <button css={[styles.container(layout), priorityStyle[priority]]} {...props}>
      {children}
    </button>
  );
};

const priorityStyle = {
  normal: css({
    backgroundColor: colors.black,
  }),
  primary: css({
    backgroundColor: colors.purple,
  }),
} as const;

const styles = {
  container: (layout: Layout) =>
    css({
      width: layout === "fill" ? "100%" : "auto",
      padding: "16px 24px",
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
