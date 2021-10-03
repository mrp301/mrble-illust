/** @jsxImportSource @emotion/react */
import React, { FC } from "react";
import { jsx, css } from "@emotion/react";

type Props = {
  horizontal?: number;
  vertical?: number;
};

const Container: FC<Props> = ({ children, horizontal = 16, vertical = 16 }) => (
  <div css={styles.container(horizontal, vertical)}>{children}</div>
);

const styles = {
  container: (horizontal: number, vertical: number) =>
    css({
      padding: `${vertical}px ${horizontal}px`,
    }),
};

export { Container };
