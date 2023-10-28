import { FC, ReactNode } from "react";
import { blurBgStyles } from "./dependencies/style";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { MainContainer } from "./MainContainer";

type Props = {
  children: ReactNode;
};

export const LayoutDefault: FC<Props> = ({ children }) => {
  return (
    <>
      <div css={blurBgStyles.bg} />
      <div css={blurBgStyles.inner}>
        <Header bgColor={false} />
        <MainContainer>{children}</MainContainer>
        <Footer />
      </div>
    </>
  );
};
