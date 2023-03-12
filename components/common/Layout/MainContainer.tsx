import React, { FC, ReactNode } from "react";
import { useTheme } from "@emotion/react";
import { css } from "@emotion/react";
import { mq } from "@/styles/mediaQueries";
import { maxWidth } from "@/constants";

export const MainContainer: FC<{ children: ReactNode }> = ({ children }) => {
  const theme = useTheme();

  const mainStyles = {
    main: css({
      minHeight: "100vh",
      // background: theme.colors.baseColor,
      color: theme.colors.text.main,
    }),
    inner: css(
      mq({
        maxWidth: ["100%", maxWidth.main],
        margin: "0 auto",
      })
    ),
  };

  return (
    <main css={mainStyles.main}>
      <div css={mainStyles.inner}>{children}</div>
    </main>
  );
};
