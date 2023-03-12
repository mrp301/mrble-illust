import { css } from "@emotion/react";
import { mq } from "@/styles/mediaQueries";
import { maxWidth } from "@/constants";

export const mainStyles = {
  main: css({
    minHeight: "100vh",
    background: "#fff",
  }),
  inner: css(
    mq({
      maxWidth: ["100%", maxWidth.main],
      margin: "0 auto",
    })
  ),
};

export const blurBgStyles = {
  bg: css({
    zIndex: 0,
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundImage: "url(/images/main-visual/oosaki/hero.jpeg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    filter: "blur(20px)",
    "&::before": {
      content: "''",
      zIndex: 1,
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
  }),
  inner: css({
    zIndex: 1,
    position: "relative",
  }),
};
