/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import Link from "next/link";

const header = css({
  padding: 10,
});

const inner = css({
  margin: "0 auto",
});

export const Header = () => {
  return (
    <header css={header}>
      <div css={inner}>
        <h1>mrble illustration</h1>
        <ul>
          <li>
            <Link href="home">Home</Link>
          </li>
          <li>
            <Link href="home">Book</Link>
          </li>
          <li>
            <Link href="home">Illustration</Link>
          </li>
          <li>
            <Link href="home">Drawing</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
