import React, { VFC } from "react";
import { css } from "@emotion/react";
import Link from "next/link";
import { textStyles } from "@/styles";

type Props = {
  items: {
    slug: string;
    text: string;
  }[];
};

export const Breadcrumb: VFC<Props> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb">
      <ul css={styles.container}>
        {items.map(({ slug, text }) => (
          <li key={slug}>
            <Link href={slug} passHref>
              <a>{text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const styles = {
  container: css({
    display: "flex",
    justifyContent: "flex-start",
    li: {
      fontSize: textStyles.small.styles,
      "&:not(:last-child)": {
        marginRight: 8,
      },
    },
    a: {
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline",
      },
    },
  }),
};
