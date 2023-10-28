import { FC, ReactNode } from "react";
import { css } from "@emotion/react";
import { textStyles } from "@/styles";
import { Theme } from "@/types/theme";

export type Props = {
  children: ReactNode;
  color: string;
};

export const TagListItem: FC<Props> = ({ children, color }) => {
  return <div css={(theme) => styles.container(color, theme)}>{children}</div>;
};

const styles = {
  container: (color: string, theme: Theme) =>
    css([
      {
        borderRadius: 4,
        textAlign: "center",
        color: theme.colors.text.main,
        fontWeight: "bold",
        padding: "8px 24px",
        backgroundColor: theme.colors[color],
        whiteSpace: "nowrap",
      },
      textStyles.small,
    ]),
};
