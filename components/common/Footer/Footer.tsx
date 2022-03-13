import React, { VFC } from "react";
import { css } from "@emotion/react";
import { color } from "@/styles/theme";
import { layout } from "@/styles/layout";
import { textStyles } from "@/styles";
import { mq } from "@/styles/mediaQueries";
import dayjs from "dayjs";

const Footer: VFC = () => (
  <footer css={styles.container}>
    <div css={styles.inner}>
      <small css={[styles.small, textStyles.small]}>
        @ {dayjs().format("YYYY")} mrble Inc.
      </small>
      <ul css={[styles.links, textStyles.small]}>
        <li>
          <a href="https://twitter.com/tubdaka616" target="_blank" rel="noreferrer">
            twitter
          </a>
        </li>
        <li>
          <a href="https://www.pixiv.net/users/4898502" target="_blank" rel="noreferrer">
            pixiv
          </a>
        </li>
        <li>
          <a
            href="https://github.com/mrp301/mrble-illust"
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>
        </li>
        <li>
          <a
            href="https://www.figma.com/file/3m4E1CxUPMut14YtqDZG8J/mrble-illust?node-id=0%3A1"
            target="_blank"
            rel="noreferrer"
          >
            Figma
          </a>
        </li>
        <li>
          <a
            href="https://mrp301.github.io/mrble-illust/"
            target="_blank"
            rel="noreferrer"
          >
            Storybook
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

const styles = {
  container: css(
    mq({
      width: "100%",
      padding: "16px",
      borderTop: `1px solid ${color.gray[30]}`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    })
  ),
  inner: css(
    mq({
      display: "flex",
      alignItems: ["flex-start", "center"],
      justifyContent: "space-between",
      flexFlow: ["column", "row"],
      width: "100%",
      maxWidth: layout.maxWidth,
      margin: "0 auto",
    })
  ),
  small: css({
    color: color.gray[60],
  }),
  links: css({
    display: "flex",
    justifyContent: "flex-end",
    li: {
      "&:not(:last-child)": {
        marginRight: 32,
      },
    },
    a: {
      color: color.gray[60],
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline",
      },
    },
  }),
};

export { Footer };
