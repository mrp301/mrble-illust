import React, { useState } from "react";
import { useRouter } from "next/router";

export const categories = [
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
] as const;

type HandleClick = (e: React.FormEvent<HTMLButtonElement>, href: string) => void;

type UseTab = {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  handleClick: HandleClick;
};

export const useTab = (): UseTab => {
  const { push } = useRouter();
  const { pathname } = useRouter();
  const [selected, setSelected] = useState<string>(pathname);

  const handleClick: HandleClick = (e, href) => {
    e.preventDefault();

    setSelected(href);
    push(href, undefined, { scroll: false });
  };

  return { selected, setSelected, handleClick };
};
