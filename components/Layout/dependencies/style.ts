/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { mq } from "../../../styles/mediaQueries";
import { maxWidth } from "../../../constants";

export const mainStyles = {
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