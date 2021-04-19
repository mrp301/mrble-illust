/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import Link from "next/link";
import { color } from "../styles/theme";
import { mq } from "../styles/mediaQueries";
import Image from "next/image";
import { bookData } from "../lib/bookData";
import { motion } from "framer-motion";

type Props = {
  toggleModal: Function;
  setBookData: React.Dispatch<React.SetStateAction<string>>;
};

const booksList = css(
  mq({
    display: "grid",
    gridTemplateColumns: ["1fr 1fr", "1fr 1fr 1fr"],
    margin: ["0 2px", "0 auto"],
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
  marginBottom: 8,
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

const BookItem = (props) => {
  const handleClick = (e): void => {
    e.preventDefault();
    props.toggleModal();
    props.setBookData(props.title);
  };

  return (
    <li>
      <a onClick={handleClick}>
        <Image
          src={`/images/book/${props.fileName}`}
          width={320}
          height={452}
          alt={props.title}
          layout={"responsive"}
        />
        <div css={bookInfo}>
          <div css={bookTitle}>{props.title}</div>
          <div css={bookRelease}>{props.release}</div>
          <div css={bookEvent}>{props.event}</div>
        </div>
      </a>
    </li>
  );
};

export const BookList: React.FC<Props> = ({ toggleModal, setBookData }) => {
  return (
    <>
      <ul css={booksList}>
        {bookData.map((item) => (
          <BookItem
            key={item.fileName}
            fileName={item.fileName}
            title={item.title}
            release={item.release}
            event={item.event}
            toggleModal={toggleModal}
            setBookData={setBookData}
          />
        ))}
      </ul>
    </>
  );
};
