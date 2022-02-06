import React, { useState, VFC } from "react";
import { CommonHead } from "../components/CommonHead";
import { BookList } from "../components/Book";
import { BookDetail } from "../components/BookDetail";
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
  const [visible, setVisible] = useState(false);
  const [bookData, setBookData] = useState<string>();

  const toggleModal = (): void => {
    setVisible(!visible);
  };

  return (
    <FadeIn>
      <CommonHead title="Book" />
      <main>
        <BookList toggleModal={toggleModal} setBookData={setBookData} />
        {visible && <BookDetail toggleModal={toggleModal} title={bookData} />}
      </main>
    </FadeIn>
  );
};

Book.getLayout = getLayout;
export default Book;
