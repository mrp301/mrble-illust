/** @jsxImportSource @emotion/react */
import { useRouter } from "next/router";
import { jsx, css } from "@emotion/react";
import Link from "next/link";
import { color } from "../styles/theme";
import { mq } from "../styles/mediaQueries";

const tab = css(
  mq({
    width: "100%",
    overflow: "scroll",
    display: "flex",
    marginBottom: [6, 30],
    borderBottom: `1px solid ${color.gray[30]}`,
  })
);

const TabItem = ({ pathname, href, text }) => {
  const isActive: Boolean = pathname === href;

  const item = css({
    position: "relative",
    bottom: -1,
    a: {
      position: "relative",
      padding: "20px 30px",
      display: "block",
      fontSize: 16,
      fontWeight: isActive ? "bold" : "normal",
      textAlign: "center",
      color: isActive ? color.primary : "#000",
      borderBottom: isActive ? `solid 2px ${color.primary}` : "none",
      textDecoration: "none",
    },
  });

  return (
    <li key={href} css={item}>
      <Link href={href}>{text}</Link>
    </li>
  );
};

const categories = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Book",
    href: "/book",
  },
  {
    text: "Illustration",
    href: "/illustration",
  },
  {
    text: "Drawing",
    href: "/drawing",
  },
];

export const Tab = () => {
  const { pathname } = useRouter();

  return (
    <ul css={tab}>
      {categories.map(({ text, href }) => (
        <TabItem pathname={pathname} text={text} href={href} />
      ))}
    </ul>
  );
};
