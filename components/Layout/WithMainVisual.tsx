/** @jsxImportSource @emotion/react */
import React, { VFC, ReactNode } from "react";
import { css } from "@emotion/react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { MainVisual } from "../MainVisual";
import { Tab } from "../Tab";
import { Container } from "../Container";
import { mainStyles } from "./dependencies/style";

type Props = {
  children: ReactNode;
};

const WithMainVisual: VFC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <MainVisual />
      <Tab css={styles.tab} />

      <main css={mainStyles.main}>
        <Container vertical={16} horizontal={0}>
          <div css={mainStyles.inner}>{children}</div>
        </Container>
      </main>

      <Footer />
    </>
  );
};

const styles = {
  tab: css({
    position: "sticky",
    top: 0,
  }),
};

export { WithMainVisual };
