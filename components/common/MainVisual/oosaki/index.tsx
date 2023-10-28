import { FC } from "react";
import { css } from "@emotion/react";
import { mq } from "@/styles/mediaQueries";
import { Header } from "../../Header";

const MainVisual: FC = () => {
  return (
    <>
      <Header bgColor={false} css={styles.header} />
      <div css={styles.conatiner}>
        <div css={styles.textContainer}>
          <div css={styles.mainTitle}>mrble</div>
          <div css={styles.subTitle}>illustration</div>
          <p css={styles.description}>過去に描いた同人誌やイラストをまとめたサイト。</p>
        </div>
      </div>
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
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      height: [400, 800],
      backgroundImage: "url(/images/main-visual/oosaki/hero.jpeg)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top",
      overflow: "hidden",
    })
  ),
  textContainer: css(
    mq({
      zIndex: 2,
      marginRight: "24px",
      marginBottom: "24px",
      width: ["100%", "1200px"],
      display: "flex",
      flexFlow: "column",
      alignItems: "flex-end",
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

export { MainVisual };
