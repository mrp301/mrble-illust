import React, { VFC, ComponentProps } from "react";
import { css } from "@emotion/react";
import { textStyles } from "@/styles";
import { Heading, TextWithChevron } from "@/components/common";
import Link from "next/link";

type Props = {
  href: string;
} & ComponentProps<typeof Heading>;

const HeadingWithMore: VFC<Props> = ({ href, className, ...props }) => {
  return (
    <div css={styles.container} className={className}>
      <Heading {...props} />
      <Link href={href} passHref>
        <a css={[textStyles.medium, styles.text]}>
          <TextWithChevron iconPosition="right">More</TextWithChevron>
        </a>
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
  text: css({
    textDecoration: "none",
  }),
};

export { HeadingWithMore };
