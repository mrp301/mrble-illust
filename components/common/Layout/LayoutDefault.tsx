import React, { FC, ReactNode } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { MainContainer } from "./MainContainer";

type Props = {
  children: ReactNode;
};

export const LayoutDefault: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </>
  );
};
