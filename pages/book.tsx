/** @jsxImportSource @emotion/react */
import { CommonHead } from "../components/CommonHead";
import { BookList } from "../components/Book";

export default function Book() {
  return (
    <>
      <CommonHead title="book" />
      <main>
        <BookList />
      </main>
    </>
  );
}
