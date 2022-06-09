import { css } from "@emotion/react";
import React, { FC } from "react";
import { layout } from "@/styles/layout";
import { mq } from "@/styles/mediaQueries";

export const MainVisual: FC = () => {
  return (
    <div css={mainVisual}>
      <div css={inner}>
        <div css={titleContainer}>
          <div css={main}>mrble</div>
          <div css={sub}>illustration</div>
          <div css={description}>過去に描いた絵や同人誌などをまとめたサイト。</div>
        </div>
      </div>
    </div>
  );
};

const height = [300, 540];

const mainVisual = css(
  mq({
    margin: ["0 auto 80px", "0 auto"],
    maxWidth: ["100%", layout.maxWidth],
    height,
    backgroundImage: "url(/images/main-visual1.jpg)",
    backgroundSize: ["cover", "1080px auto"],
    backgroundRepeat: "no-repeat",
    backgroundPosition: ["100%", "right"],
    opacity: 0.8,
  })
);

const inner = css(
  mq({
    position: "relative",
    display: "flex",
    alignItems: "center",
    width: ["100%", 1135],
    margin: "0 auto",
    height,
  })
);

const titleContainer = css(
  mq({
    position: ["absolute", "static"],
    bottom: "-18%",
    display: "flex",
    flexFlow: "column",
    alignItems: "flex-start",
  })
);

const titleBackColor = {
  backgroundColor: "rgba(255, 255, 255, 0.5)",
};

const main = css(
  mq({
    paddingRight: [20, 30],
    paddingLeft: ["5.3vw", 15],
    fontWeight: "bold",
    fontSize: [60, 96],
    lineHeight: 1,
    marginBottom: [10, 15],
    ...titleBackColor,
  })
);

const sub = css(
  mq({
    paddingRight: [10, 20],
    paddingLeft: ["5.3vw", 15],
    fontWeight: "bold",
    fontSize: [40, 72],
    marginBottom: [10, 15],
    lineHeight: 1,
    ...titleBackColor,
  })
);

const description = css(
  mq({
    paddingRight: [5, 10],
    paddingLeft: ["5.3vw", 15],
    fontWeight: "bold",
    fontSize: [12, 18],
    lineHeight: 2,
    ...titleBackColor,
  })
);
