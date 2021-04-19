/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { useRouter } from "next/router";
import { jsx, css } from "@emotion/react";
import { color } from "../styles/theme";
import { mq } from "../styles/mediaQueries";
import { motion, AnimateSharedLayout } from "framer-motion";

type TabItemProps = {
  href: string;
  text: string;
  isSelected: boolean;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
};

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

const TabItem: React.FC<TabItemProps> = ({ href, text, isSelected, setSelected }) => {
  const { push } = useRouter();

  const handleClick = (e): void => {
    e.preventDefault();

    setSelected(href);
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
        fontWeight: isSelected ? "bold" : "normal",
        textAlign: "center",
        color: isSelected ? color.primary : "#000",
        textDecoration: "none",
      },
    })
  );

  const underLine = css({
    width: "100%",
    height: 2,
    backgroundColor: color.primary,
  });

  return (
    <li css={item}>
      <a href={href} onClick={handleClick}>
        {text}
      </a>
      {isSelected && (
        <motion.div
          css={underLine}
          layoutId="underLine"
          initial={false}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        />
      )}
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
  const [selected, setSelected] = useState(pathname);

  return (
    <AnimateSharedLayout>
      <ul css={tab}>
        {categories.map(({ text, href }) => (
          <TabItem
            key={href}
            text={text}
            href={href}
            isSelected={selected === href}
            setSelected={setSelected}
          />
        ))}
      </ul>
    </AnimateSharedLayout>
  );
};
