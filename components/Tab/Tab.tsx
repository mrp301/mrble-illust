/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { VFC } from "react";
import { AnimateSharedLayout } from "framer-motion";

import { color } from "../../styles/theme";
import { mq } from "../../styles/mediaQueries";
import { maxWidth } from "../../constants";

import { TabItem } from "./TabItem";
import { categories, useTab } from "./dependencies";

type Props = JSX.IntrinsicElements["div"];

const Tab: VFC<Props> = ({ ...props }) => {
  const { selected } = useTab();

  return (
    <div css={styles.container} {...props}>
      <AnimateSharedLayout>
        <ul css={styles.inner}>
          {categories.map((category) => (
            <TabItem
              key={category.href}
              isSelected={selected === category.href}
              {...category}
            />
          ))}
        </ul>
      </AnimateSharedLayout>
    </div>
  );
};

const styles = {
  container: css({
    borderBottom: `1px solid ${color.gray[30]}`,
    backgroundColor: "#fff",
    zIndex: 10,
  }),
  inner: css(
    mq({
      maxWidth: ["100%", maxWidth.main],
      margin: "0 auto",
      display: "flex",
    })
  ),
};

export { Tab };
