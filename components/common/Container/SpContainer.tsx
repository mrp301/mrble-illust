import { css } from "@emotion/react";
import React, { VFC, ReactNode } from "react";
import { mq } from "@/styles/mediaQueries";

type Props = {
  children: ReactNode;
  horizontal?: number;
  vertical?: number;
};

const SpContainer: VFC<Props> = ({ children, horizontal = 16, vertical = 16 }) => (
  <div css={styles.container(horizontal, vertical)}>{children}</div>
);

const styles = {
  container: (horizontal: number, vertical: number) =>
    css(
      mq({
        padding: [`${vertical}px ${horizontal}px`, 0],
      })
    ),
};

export { SpContainer };
