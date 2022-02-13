/** @jsxImportSource @emotion/react */
import React, { VFC, ComponentProps } from "react";
import { css } from "@emotion/react";
import { textStyles } from "@/styles";
import { Heading } from "@/components";
import Link from "next/link";
import { colors } from "@/constants";

type Props = {
  href: string;
} & ComponentProps<typeof Heading>;

const HeadingWithMore: VFC<Props> = ({ href, className, ...props }) => {
  return (
    <div css={styles.container} className={className}>
      <Heading {...props} />
      <Link href={href} passHref>
        <a css={[styles.moreText, textStyles.medium]}>More</a>
      </Link>
    </div>
  );
};

const styles = {
  container: css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }),
  moreText: css({
    display: "flex",
    alignItems: "center",
    textAlign: "right",
    fontWeight: "bold",
    color: colors.black,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
    "&::after": {
      marginLeft: 4,
      boxSizing: "border-box",
      content: "''",
      width: 10,
      height: 10,
      borderTop: "solid 3px",
      borderRight: "solid 3px",
      borderColor: colors.black,
      transform: "rotate(45deg)",
    },
  }),
};

export { HeadingWithMore };
