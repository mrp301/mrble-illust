import { css } from "@emotion/react";
import React, { VFC } from "react";
import { color } from "@/styles/theme";
import { mq } from "@/styles/mediaQueries";
import { useTab } from "./dependencies";
import { motion } from "framer-motion";

type Props = {
  href: string;
  text: string;
  isSelected: boolean;
};

const TabItem: VFC<Props> = ({ href, text, isSelected }) => {
  const { handleClick } = useTab();

  return (
    <li css={styles.container}>
      <button type="button" onClick={(e) => handleClick(e, href)}>
        {text}
      </button>
      {isSelected && (
        <motion.div
          css={styles.underLine}
          layoutId="underLine"
          initial={false}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        />
      )}
    </li>
  );
};

const styles = {
  container: (isSelected: boolean) =>
    css(
      mq({
        position: "relative",
        bottom: -1,
        width: ["100%", "auto"],
        button: {
          position: "relative",
          padding: ["20px 0", "20px 30px"],
          display: "block",
          fontSize: 16,
          fontWeight: isSelected ? "bold" : "normal",
          textAlign: "center",
          color: isSelected ? color.primary : "#000",
          textDecoration: "none",
          width: "100%",
          background: "none",
          border: "none",
          cursor: "pointer",
          "&: hover": {
            background: "#f7f7f7",
          },
        },
      })
    ),
  underLine: css({
    width: "100%",
    height: 2,
    backgroundColor: color.primary,
  }),
};

export { TabItem };
