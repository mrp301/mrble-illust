import { FC, ReactNode } from "react";
import { css } from "@emotion/react";

type Props = {
  tag: "h1" | "h2" | "h3";
  children: ReactNode;
  isSticky?: boolean;
} & JSX.IntrinsicElements["h1"];

const Heading: FC<Props> = ({ tag, isSticky = false, children, ...props }) => {
  const Tag = tag;
  return (
    <Tag css={[baseStyles(isSticky), tagStyles[tag]]} {...props}>
      {children}
    </Tag>
  );
};

const baseStyles = (isSticky: boolean) =>
  css({
    fontWeight: "bold",
    lineHeight: 1.5,
    position: isSticky ? "sticky" : "static",
    zIndex: 1,
    top: 5,
  });

const tagStyles = {
  h1: css({
    fontSize: 48,
    lineHeight: 1.2,
  }),
  h2: css({
    fontSize: 28,
    lineHeight: 1.2,
  }),
  h3: css({
    fontSize: 20,
    lineHeight: 1.2,
  }),
};

export { Heading };
