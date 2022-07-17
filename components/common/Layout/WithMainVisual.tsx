import React, { FC, ReactNode } from "react";
import { Footer } from "../Footer";
import { MainVisual } from "../MainVisual/oosaki";
import { MainContainer } from "./MainContainer";

type Props = {
  children: ReactNode;
};

const WithMainVisual: FC<Props> = ({ children }) => {
  return (
    <>
      <MainVisual />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </>
  );
};

export { WithMainVisual };
