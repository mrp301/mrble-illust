import { FC } from "react";
import { css } from "@emotion/react";
import { layout } from "@/styles/layout";
import { textStyles } from "@/styles";
import { mq } from "@/styles/mediaQueries";
import dayjs from "dayjs";
import { Theme } from "@/types/theme";

const links = [
  {
    href: "https://twitter.com/tubdaka616",
    text: "twitter",
  },
  {
    href: "https://www.pixiv.net/users/4898502",
    text: "pixiv",
  },
  {
    href: "https://github.com/mrp301/mrble-illust",
    text: "github",
  },
  {
    href: "https://www.figma.com/file/3m4E1CxUPMut14YtqDZG8J/mrble-illust?node-id=0%3A1",
    text: "Figma",
  },
  {
    href: "https://mrp301.github.io/mrble-illust/",
    text: "Storybook",
  },
];

const Footer: FC = () => (
  <footer css={styles.container}>
    <div css={styles.inner}>
      <small css={styles.small}>@ {dayjs().format("YYYY")} mrble Inc.</small>
      <ul css={styles.links}>
        {links.map(({ href, text }) => (
          <li key={text}>
            <a href={href} target="_blank" rel="noreferrer">
              {text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </footer>
);

const styles = {
  container: (theme: Theme) =>
    css(
      mq({
        width: "100%",
        padding: "16px",
        borderTop: `1px solid ${theme.colors.glay.lighter}`,
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
  small: (theme: Theme) =>
    css([
      {
        color: theme.colors.glay.light,
      },
      textStyles.small,
    ]),
  links: (theme: Theme) =>
    css([
      {
        display: "flex",
        justifyContent: "flex-end",
        li: {
          "&:not(:last-child)": {
            marginRight: 32,
          },
        },
        a: {
          color: theme.colors.text.light,
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
          },
        },
      },
      textStyles.small,
    ]),
};

export { Footer };
