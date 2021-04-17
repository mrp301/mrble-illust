/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import Link from "next/link";
import { color } from "../styles/theme";
import { mq } from "../styles/mediaQueries";
import Image from "next/image";

const booksList = css(
  mq({
    display: "grid",
    gridTemplateColumns: ["1fr 1fr", "1fr 1fr 1fr"],
    margin: ["0 2px", -12],
    li: {
      margin: [4, 6],
      "&:hover": {
        cursor: "pointer",
        opacity: 0.8,
      },
    },
  })
);

const bookInfo = css(
  mq({
    display: ["none", "block"],
    padding: "10px 10px 8px",
  })
);

const bookTitle = css({
  fontWeight: "bold",
  fontSize: 20,
  marginBottom: 12,
});

const bookRelease = css({
  fontSize: 14,
  color: color.gray[50],
  marginBottom: 5,
});

const bookEvent = css({
  fontSize: 14,
  color: color.gray[50],
});

const images = [
  {
    title: "Nirvana",
    fileName: "nirvana.jpg",
    release: "2020年12月27日",
    event: "プリズムジャンプ31",
  },
  {
    title: "乙女TIME",
    fileName: "otome.jpg",
    release: "2019年3月29日",
    event: "プリズムジャンプ28",
  },
  {
    title: "桃山みらいの休日",
    fileName: "holiday.jpg",
    release: "2019年8月10日",
    event: "コミックマーケット96",
  },
  {
    title: "プリチャンコンプレックス",
    fileName: "complex.jpg",
    release: "2018年12月29日",
    event: "コミックマーケット95",
  },
  {
    title: "パチュリー様は夏が嫌い！",
    fileName: "summer.jpg",
    release: "2018年8月10日",
    event: "コミックマーケット94",
  },
  {
    title: "ハジライ",
    fileName: "hazirai.jpg",
    release: "2017年12月29日",
    event: "コミックマーケット93",
  },
];

const Book = ({ fileName, title, release, event }) => {
  return (
    <li key={fileName}>
      <Image src={`/images/book/${fileName}`} width={320} height={452} alt={title} />
      <div css={bookInfo}>
        <div css={bookTitle}>{title}</div>
        <div css={bookRelease}>{release}</div>
        <div css={bookEvent}>{event}</div>
      </div>
    </li>
  );
};

export const BookList = () => {
  return (
    <ul css={booksList}>
      {images.map((item) => (
        <Book fileName={item.fileName} title={item.title} release={item.release} event={item.event} />
      ))}
    </ul>
  );
};
