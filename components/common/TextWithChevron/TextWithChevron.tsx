import React, { FC, ReactNode } from "react";
import { css } from "@emotion/react";
import { textStyles } from "@/styles";
import { Theme } from "@/types/theme";

type IconPosition = "left" | "right";

type Props = {
  iconPosition: IconPosition;
  children: ReactNode;
};

export const TextWithChevron: FC<Props> = ({ iconPosition, children, ...props }) => {
  return (
    <div {...props}>
      <span css={(theme) => [styles.text(iconPosition, theme), textStyles.medium]}>
        {children}
      </span>
    </div>
  );
};

const styles = {
  text: (iconPosition: IconPosition, theme: Theme) =>
    css({
      display: "inline-flex",
      alignItems: "center",
      flexDirection: iconPosition === "left" ? "row-reverse" : "row",
      textAlign: "right",
      fontWeight: "bold",
      color: theme.colors.text.main,
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline",
      },
      "&::after": {
        marginLeft: 4,
        boxSizing: "border-box",
        content: "''",
        width: 10,
        height: 10,
        borderTop: "solid 3px",
        borderRight: "solid 3px",
        borderColor: theme.colors.text.main,
        transform: iconPosition === "left" ? "rotate(-135deg)" : "rotate(45deg)",
      },
    }),
};
