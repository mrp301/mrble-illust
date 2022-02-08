import React, { VFC } from "react";
import { CommonHead } from "../components/CommonHead";
import { FadeIn } from "../components/FadeIn";
import { getLayout } from "../lib/getLayout";

type Book = {
  title: string;
  fileName: string;
  release: string;
  event: string;
  description: string;
};

const Book: WithLayout<VFC> = () => {
  return (
    <FadeIn>
      <CommonHead title="Book" />
      <main>削除予定</main>
    </FadeIn>
  );
};

Book.getLayout = getLayout;
export default Book;
