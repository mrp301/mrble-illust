import React, { VFC, ReactNode } from "react";
import { css } from "@emotion/react";

type Props = {
  tag: "h1" | "h2" | "h3";
  children: ReactNode;
} & JSX.IntrinsicElements["h1"];

const Heading: VFC<Props> = ({ tag, children, ...props }) => {
  const Tag = tag;
  return (
    <Tag css={[baseStyles, tagStyles[tag]]} {...props}>
      {children}
    </Tag>
  );
};

const baseStyles = css({
  fontWeight: "bold",
  lineHeight: 1.5,
});

const tagStyles = {
  h1: css({
    fontSize: 48,
  }),
  h2: css({
    fontSize: 28,
  }),
  h3: css({
    fontSize: 24,
  }),
};

export { Heading };
