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
];

export const useTab = () => {
  const { push } = useRouter();
  const { pathname } = useRouter();
  const [selected, setSelected] = useState<string>(pathname);

  const handleClick = (e: React.FormEvent<HTMLButtonElement>, href: string) => {
    e.preventDefault();

    setSelected(href);
    push(href, undefined, { scroll: false });
  };

  return { selected, setSelected, handleClick };
};
