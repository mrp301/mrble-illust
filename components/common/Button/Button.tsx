import { css } from "@emotion/react";
import React, { FC, ReactNode } from "react";
import { Theme } from "@/types/theme";

type Layout = "fill" | "auto";
type Priority = "primary" | "normal";
type Props = {
  priority?: Priority;
  layout?: Layout;
  children: ReactNode;
} & JSX.IntrinsicElements["button"];

const Button: FC<Props> = ({
  priority = "normal",
  children,
  layout = "auto",
  ...props
}) => {
  return (
    <button
      css={(theme) => [styles.container(layout), priorityStyle[priority](theme)]}
      {...props}
    >
      {children}
    </button>
  );
};

const priorityStyle = {
  normal: (theme: Theme) =>
    css({
      backgroundColor: theme.colors.black,
    }),
  primary: (theme: Theme) =>
    css({
      backgroundColor: theme.colors.primary.main,
      "&:hover": {
        backgroundColor: theme.colors.primary.light,
      },
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
