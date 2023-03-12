import React, { FC, ReactNode } from "react";
import { css } from "@emotion/react";
import { mq } from "@/styles/mediaQueries";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { MainContainer } from "./MainContainer";

type Props = {
  children: ReactNode;
};

const WithMainVisualBlur: FC<Props> = ({ children }) => {
  return (
    <>
      <Header bgColor={false} css={styles.header} />
      <div css={styles.conatiner} />
      <div css={styles.textContainer}>
        <div css={styles.mainTitle}>mrble</div>
        <div css={styles.subTitle}>illustration</div>
        <p css={styles.description}>過去に描いた同人誌やイラストをまとめたサイト。</p>
      </div>
      <div css={styles.MainContainer}>
        <MainContainer>{children}</MainContainer>
      </div>
      <Footer />
    </>
  );
};

const styles = {
  header: css({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 10,
    color: "#fff",
  }),
  conatiner: css(
    mq({
      zIndex: 0,
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vw",
      backgroundImage: "url(/images/main-visual/oosaki/hero.jpeg)",
      backgroundColor: "#222",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top",
      filter: "blur(25px)",
      "&::before": {
        content: "''",
        zIndex: 1,
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.85)",
      },
    })
  ),
  MainContainer: css({
    zIndex: 1,
    position: "relative",
  }),
  textContainer: css(
    mq({
      zIndex: 1,
      position: "relative",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      flexFlow: "column",
      height: [400, 800],
      marginRight: "24px",
      marginBottom: "24px",
      width: ["100%", "1200px"],
      color: "#fff",
    })
  ),
  mainTitle: css(
    mq({
      paddingRight: [20, 0],
      paddingLeft: ["5.3vw", 0],
      fontWeight: "bold",
      fontSize: [48, 96],
      lineHeight: 1,
    })
  ),
  subTitle: css(
    mq({
      paddingRight: [10, 0],
      paddingLeft: ["5.3vw", 0],
      fontWeight: "bold",
      fontSize: [32, 72],
      marginBottom: [10, 32],
      lineHeight: 0.8,
    })
  ),
  description: css(
    mq({
      paddingLeft: ["5.3vw", 0],
      fontSize: [13, 18],
      lineHeight: 1.5,
    })
  ),
};

export { WithMainVisualBlur };
