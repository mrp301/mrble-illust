/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import { mq } from "../styles/mediaQueries";
import { zIndex } from "../styles/zIndex";
import { margin } from "../styles/margin";
import Image from "next/image";
import { bookData } from "../lib/bookData.js";
import { color } from "../styles/theme";

// type Props = {
//   title: string;
//   fileName: string;
//   release: string;
//   event: string;
//   description: string;
// };

type Props = {
  toggleModal: Function;
  title: string;
};

const orverlay = css({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: zIndex.orverlay,
});

const modalContainer = css({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: zIndex.modal,
});

const closeBtn = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: 0,
  right: 10,
  width: 40,
  height: 40,
  fontSize: 20,
  color: "#fff",
  lineHeight: 1,
  textAlign: "center",
  background: "#000",
  zIndex: 100,
  "&:hover": {
    cursor: "pointer",
    opacity: 0.8,
  },
});

const modal = css(
  mq({
    position: "fixed",
    top: [0, "auto"],
    margin: "auto",
    width: ["100%", "80%"],
    maxWidth: [480, 960],
    maxHeight: ["100%", "auto"],
    backgroundColor: "#fff",
    overflow: "visible scroll",
  })
);

const inner = css(
  mq({
    display: "flex",
    flexFlow: ["column", "row"],
    overflow: "visible scroll",
  })
);

const image = css({
  flex: "1 1 auto",
});

const body = css(
  mq({
    flex: "1 1 auto",
    padding: ["30px 15px", "30px 30px"],
    fontSize: 14,
  })
);

const title = css({
  fontSize: 30,
  fontWeight: "bold",
  marginBottom: 10,
});

const table = css({
  width: "100%",
  fontSize: 12,
  tr: {
    margin: 10,
    borderBottom: `solid 1px ${color.gray[40]}`,
    "&:first-child": {
      borderTop: `solid 1px ${color.gray[40]}`,
    },
  },
  th: {
    fontWeight: "normal",
    textAlign: "left",
    padding: "10px 0",
  },
});

export const BookDetail: React.FC<Props> = (props) => {
  const currentBook = bookData.find(({ title }) => title === props.title);
  if (!currentBook) {
    alert("本が見つかりません！");
    return;
  }

  const tHeads = [
    {
      key: "title",
      value: "タイトル",
    },
    {
      key: "release",
      value: "発行日",
    },
    {
      key: "event",
      value: "イベント",
    },
  ];

  return (
    <>
      <div css={orverlay}></div>
      <div css={modalContainer} onClick={() => props.toggleModal()}>
        <div css={modal}>
          <div css={closeBtn}>×</div>
          <div css={inner}>
            <Image
              src={`/images/book/${currentBook.fileName}`}
              width={463}
              height={654}
              layout={"intrinsic"}
              css={image}
            />
            <div css={body}>
              <div css={title}>{currentBook.title}</div>
              <div css={margin.bottom[32]}>{currentBook.release}</div>
              <div css={margin.bottom[32]}>{currentBook.description}</div>
              <table css={table}>
                <tbody>
                  {tHeads.map(({ key, value }) => (
                    <tr key={key}>
                      <th>{value}</th>
                      <td>{currentBook[key]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
