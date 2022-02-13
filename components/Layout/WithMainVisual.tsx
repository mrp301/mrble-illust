/** @jsxImportSource @emotion/react */
import React, { VFC, ReactNode } from "react";
import { css } from "@emotion/react";
import { Footer } from "../Footer";
import { MainVisual } from "../MainVisual/c99Winter/";
import { mainStyles } from "./dependencies/style";

type Props = {
  children: ReactNode;
};

const WithMainVisual: VFC<Props> = ({ children }) => {
  return (
    <>
      <MainVisual />
      <main css={mainStyles.main}>
        <div css={mainStyles.inner}>{children}</div>
      </main>
      <Footer />
    </>
  );
};

export { WithMainVisual };
