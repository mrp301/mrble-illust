import React, { FC, ReactNode } from "react";
import { Footer } from "../Footer";
import { MainVisual } from "../MainVisual/c99Winter/";
import { mainStyles } from "./dependencies/style";

type Props = {
  children: ReactNode;
};

const WithMainVisual: FC<Props> = ({ children }) => {
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
