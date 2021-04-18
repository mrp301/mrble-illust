/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { CommonHead } from "../components/CommonHead";
import { BookList } from "../components/Book";
import { BookDetail } from "../components/BookDetail";

type Book = {
  title: string;
  fileName: string;
  release: string;
  event: string;
  description: string;
};

export default function Book() {
  const [visible, setVisible] = useState(false);
  const [bookData, setBookData] = useState<string>();

  const toggleModal = (): void => {
    setVisible(!visible);
  };

  return (
    <>
      <CommonHead title="book" />
      <main>
        <BookList toggleModal={toggleModal} setBookData={setBookData} />
        {visible && <BookDetail toggleModal={toggleModal} title={bookData} />}
      </main>
    </>
  );
}
