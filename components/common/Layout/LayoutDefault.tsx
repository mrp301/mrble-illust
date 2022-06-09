import React, { FC, ReactNode } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Container } from "../Container";
import { mainStyles } from "./dependencies/style";

type Props = {
  children: ReactNode;
};

export const LayoutDefault: FC<Props> = ({ children }) => {
  return (
    <>
      <Header bgColor="white" />
      <main css={mainStyles.main}>
        <Container vertical={16} horizontal={0}>
          <div css={mainStyles.inner}>{children}</div>
        </Container>
      </main>
      <Footer />
    </>
  );
};
