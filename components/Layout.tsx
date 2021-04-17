/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MainVisual } from "../components/MainVisual";
import { Tab } from "../components/Tab";
import { layout } from "../styles/layout";
import { mq } from "../styles/mediaQueries";

const container = css(
  mq({
    margin: "0 auto",
    width: ["100%", layout.mainArea],
  })
);

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <MainVisual />
      <div css={container}>
        <Tab />
        {children}
      </div>
      <Footer />
    </>
  );
};
