import React, { VFC, ReactNode } from "react";
import { css } from "@emotion/react";
import { textStyles } from "@/styles";
import { colors } from "@/constants";

export type Props = {
  children: ReactNode;
  color: string;
};

export const TagListItem: VFC<Props> = ({ children, color }) => {
  return <div css={[styles.container(color), textStyles.small]}>{children}</div>;
};

const styles = {
  container: (color: string) =>
    css({
      borderRadius: 4,
      textAlign: "center",
      color: "#fff",
      fontWeight: "bold",
      padding: "8px 24px",
      backgroundColor: colors[color],
      whiteSpace: "nowrap",
    }),
};
