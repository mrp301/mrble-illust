import { css } from "@emotion/react";
import React, { FC } from "react";
import { mq } from "@/styles/mediaQueries";
import Image from "next/image";
import { margin } from "@/styles/margin";
import { textStyles, fontWeight } from "@/styles";
import { Button } from "../../Button";
import { Header } from "../../Header";

export const MainVisual: FC = () => {
  return (
    <>
      <Header bgColor="none" css={styles.header} />
      <div css={styles.conatiner}>
        <div css={styles.illust}>
          <Image
            src="/images/main-visual/c99-winter/main-visual-illust.png"
            width={745}
            height={720}
            alt="みらいちゃんとりんかちゃん"
          />
        </div>
        <div css={styles.inner}>
          <div css={styles.textContainer}>
            <div css={styles.mainTitle}>mrble</div>
            <div css={styles.subTitle}>illustration</div>
            <p css={[description]}>過去に描いた同人誌やイラストをまとめたサイト。</p>
            <div css={styles.cta}>
              <p
                css={[description, textStyles.large, fontWeight.bold, margin.bottom[12]]}
              >
                C99新刊販売中！
              </p>
              <a
                href="https://mrble.booth.pm/items/3559083"
                target="_blank"
                rel="noreferrer"
                tabIndex={-1}
              >
                <Button priority="primary">購入ページへ</Button>
              </a>
            </div>
          </div>
          <div css={styles.meru}>
            <Image
              src="/images/main-visual/c99-winter/main-visual-meru.png"
              width={158}
              height={245}
              alt="めるめる"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const titleBackColor = {
  backgroundColor: "rgba(255, 255, 255, 0.8)",
};
const height = ["auto", 720];

const styles = {
  header: css({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 10,
  }),
  conatiner: css(
    mq({
      position: "relative",
      margin: ["0 auto", "0 auto"],
      height,
      backgroundImage: "url(/images/main-visual/c99-winter/main-visual-bg.png)",
      backgroundSize: ["cover", "1440px"],
      backgroundRepeat: "no-repeat",
      backgroundPosition: "left",
      overflow: "hidden",
    })
  ),
  inner: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    width: ["100%", 960],
    height: "100%",
    margin: "0 auto",
  }),
  illust: css(
    mq({
      position: "absolute",
      top: ["-20px", 0],
      left: ["110px", "150px"],
      zIndex: 1,
    })
  ),
  textContainer: css(
    mq({
      marginTop: [120, 0],
      zIndex: 2,
      width: ["100%", "432px"],
      display: "flex",
      flexFlow: "column",
      alignItems: "flex-start",
    })
  ),
  mainTitle: css(
    mq({
      paddingRight: [20, 0],
      paddingLeft: ["5.3vw", 0],
      fontWeight: "bold",
      fontSize: [48, 96],
      lineHeight: 1,
      ...titleBackColor,
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
      ...titleBackColor,
    })
  ),
  cta: css(
    mq({
      display: ["none", "block"],
      marginTop: 32,
    })
  ),
  meru: css(
    mq({
      display: ["none", "block"],
      position: "absolute",
      bottom: 0,
      right: 0,
    })
  ),
};

const description = css(
  mq({
    paddingLeft: ["5.3vw", 0],
    fontSize: [13, 18],
    lineHeight: 1.5,
    ...titleBackColor,
  })
);
