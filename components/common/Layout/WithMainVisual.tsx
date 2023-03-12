import React, { FC, ReactNode } from "react";
import { blurBgStyles } from "./dependencies/style";
import { Footer } from "../Footer";
import { MainVisual } from "../MainVisual/oosaki";
import { MainContainer } from "./MainContainer";

type Props = {
  children: ReactNode;
};

const WithMainVisual: FC<Props> = ({ children }) => {
  return (
    <>
      <div css={blurBgStyles.bg} />
      <div css={blurBgStyles.inner}>
        <MainVisual />
        <MainContainer>{children}</MainContainer>
        <Footer />
      </div>
    </>
  );
};

export { WithMainVisual };
