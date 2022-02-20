import { css } from "@emotion/react";
import React, { VFC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  horizontal?: number;
  vertical?: number;
};

const Container: VFC<Props> = ({ children, horizontal = 16, vertical = 16 }) => (
  <div css={styles.container(horizontal, vertical)}>{children}</div>
);

const styles = {
  container: (horizontal: number, vertical: number) =>
    css({
      padding: `${vertical}px ${horizontal}px`,
    }),
};

export { Container };
