/** @jsxImportSource @emotion/react */
import { useRouter } from "next/router";
import { jsx, css } from "@emotion/react";
import Link from "next/link";
import { color } from "../styles/theme";
import { mq } from "../styles/mediaQueries";

const tab = css(
  mq({
    position: "sticky",
    top: 0,
    width: "100%",
    display: "flex",
    marginBottom: [6, 30],
    borderBottom: `1px solid ${color.gray[30]}`,
    backgroundColor: "#fff",
    zIndex: 10,
  })
);

const TabItem = ({ href, text }) => {
  const { pathname, push } = useRouter();
  const isActive: Boolean = pathname === href;

  const handleClick = (e): void => {
    e.preventDefault();
    push(href, undefined, { scroll: false });
  };

  const item = css(
    mq({
      position: "relative",
      bottom: -1,
      width: ["100%", "auto"],
      a: {
        position: "relative",
        padding: ["20px 0", "20px 30px"],
        display: "block",
        fontSize: 16,
        fontWeight: isActive ? "bold" : "normal",
        textAlign: "center",
        color: isActive ? color.primary : "#000",
        borderBottom: isActive ? `solid 2px ${color.primary}` : "none",
        textDecoration: "none",
      },
    })
  );

  return (
    <li css={item}>
      <a href={href} onClick={handleClick}>
        {text}
      </a>
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
  return (
    <ul css={tab}>
      {categories.map(({ text, href }) => (
        <TabItem text={text} href={href} key={href} />
      ))}
    </ul>
  );
};
