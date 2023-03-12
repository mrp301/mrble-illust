import React, { FC } from "react";
import Link from "next/link";
import { css } from "@emotion/react";
import { SpContainer, TextWithChevron } from "@/components/common";

type Props = {
  href: string;
};

export const PageBack: FC<Props> = ({ href }) => {
  return (
    <SpContainer>
      <div css={styles.navContainer}>
        <Link href={href} scroll={false}>
          <TextWithChevron iconPosition="left">back</TextWithChevron>
        </Link>
      </div>
    </SpContainer>
  );
};

const styles = {
  navContainer: css({
    display: "flex",
    alignItems: "center",
  }),
};
