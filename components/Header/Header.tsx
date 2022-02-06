/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { VFC } from "react";
import Link from "next/link";
import { layout } from "../../styles/layout";
import { mq } from "../../styles/mediaQueries";

const Header: VFC = () => {
  return (
    <header css={styles.container}>
      <div css={styles.inner}>
        <h1 css={styles.sieTitle}>
          <Link href="/" passHref>
            <a>mrble illustration</a>
          </Link>
        </h1>
      </div>
    </header>
  );
};

const styles = {
  container: css(
    mq({
      padding: ["15px 20px", "10px 0 10px 40px"],
    })
  ),
  sieTitle: css({
    fontWeight: "bold",
    a: {
      color: "#000",
      textDecoration: "none",
    },
  }),
  inner: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: layout.maxWidth,
    margin: "0 auto",
  }),
};

export { Header };
