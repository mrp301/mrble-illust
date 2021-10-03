/** @jsxImportSource @emotion/react */
import React, { FC } from "react";
import type { ReactElement } from "react";
import { css } from "@emotion/react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { MainVisual } from "../MainVisual";
import { Tab } from "../Tab";
import { Container } from "../Container";
import { mq } from "../../styles/mediaQueries";
import { maxWidth } from "../../constants";

const WithMainVisual: FC = ({ children }) => {
  return (
    <>
      <Header />
      <MainVisual />
      <Tab css={styles.tab} />

      <main css={styles.main}>
        <Container vertical={16} horizontal={0}>
          <div css={styles.inner}>{children}</div>
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
  main: css({
    minHeight: "100vh",
    background: "#fafafa",
  }),
  inner: css(
    mq({
      maxWidth: ["100%", maxWidth.main],
      margin: "0 auto",
    })
  ),
};

export { WithMainVisual };
