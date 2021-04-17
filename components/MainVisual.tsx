/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import { layout } from "../styles/layout";

const height = 540;

const mainVisual = css({
  margin: "0 auto",
  maxWidth: layout.maxWidth,
  height,
  backgroundImage: "url(/images/main-visual1.jpg)",
  backgroundSize: "1080px auto",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right",
  opacity: 0.8,
});

const inner = css({
  display: "flex",
  alignItems: "center",
  width: layout.mainArea,
  margin: "0 auto",
  height,
});

const titleContainer = css({
  display: "flex",
  flexFlow: "column",
  alignItems: "flex-start",
});

const titleBackColor = {
  backgroundColor: "rgba(255, 255, 255, 0.5)",
};

const main = css({
  paddingRight: 30,
  fontWeight: "bold",
  fontSize: 96,
  lineHeight: 1,
  marginBottom: 15,
  ...titleBackColor,
});

const sub = css({
  paddingRight: 20,
  fontWeight: "bold",
  fontSize: 72,
  marginBottom: 15,
  lineHeight: 1,
  ...titleBackColor,
});

const description = css({
  paddingRight: 10,
  fontWeight: "bold",
  fontSize: 18,
  lineHeight: 2,
  ...titleBackColor,
});

export const MainVisual = () => {
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
