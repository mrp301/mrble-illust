/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { VFC } from "react";
import { mq } from "../../styles/mediaQueries";
import { BookListItem, BookListItemType } from "./BookListItem";

type Props = {
  bookListData: BookListItemType[];
};

const BookList: VFC<Props> = ({ bookListData }) => {
  return (
    <ul css={booksList}>
      {bookListData.map((bookData) => (
        <BookListItem key={bookData.title} {...bookData} />
      ))}
    </ul>
  );
};

const booksList = css(
  mq({
    display: "grid",
    gridTemplateColumns: ["repeat(2, 1fr)", "repeat(3, 1fr)"],
    columnGap: [8, 12],
    margin: ["0 2px", "0 auto"],
    li: {
      marginBottom: [8, 12],
      borderRadius: 4,
      overflow: "hidden",
      backgroundColor: "#fff",
      "&:hover": {
        cursor: "pointer",
        opacity: 0.8,
      },
    },
  })
);

export { BookList };
