import React, { VFC, memo } from "react";
import { css } from "@emotion/react";
import { mq } from "@/styles/mediaQueries";
import { margin } from "@/styles/margin";
import Image from "next/image";
import { useBookViewer } from "./useBookViewer";
import { colors } from "@/constants";
import { graphql, useFragment } from "react-relay";
import { BookViewerArea_fragment$key } from "./__generated__/BookViewerArea_fragment.graphql";
import { ChevronRight, ChevronLeft } from "@mui/icons-material";

const fragment = graphql`
  fragment BookViewerArea_fragment on Books {
    cover {
      title
      url
    }
    samplePagesCollection {
      items {
        title
        url
      }
    }
  }
`;

export type BookViewerData = {
  title: string;
  url: string;
};

type BookViewerArea = {
  src: string;
  alt: string;
};

// eslint-disable-next-line react/display-name
const BookViewerArea: VFC<BookViewerArea> = memo(({ src, alt }) => (
  <div css={styles.BookViewerArea}>
    <Image
      src={`${src}?fit=pad&w=550&h=550&bg=rgb:cccccc`}
      alt={alt}
      width={550}
      height={550}
      layout="responsive"
    />
  </div>
));

type Props = {
  fragmentRef: BookViewerArea_fragment$key;
};

const BookViewer: VFC<Props> = ({ fragmentRef }) => {
  const { cover, samplePagesCollection } = useFragment(fragment, fragmentRef);
  const { bookViewerData, currentPage, handleChange, handleNext, handleBack } =
    useBookViewer({
      cover,
      samplePagesCollection,
    });

  return (
    <div css={styles.bookSampleContainer}>
      <div css={[styles.BookViewerAreaConatiner, margin.bottom[8]]}>
        <button
          onClick={handleBack}
          css={styles.controleButton("prev")}
          aria-label="前のページへ"
        >
          <ChevronLeft sx={{ color: "#fff" }} fontSize="large" />
        </button>
        <BookViewerArea
          src={bookViewerData[currentPage].url}
          alt={bookViewerData[currentPage].title}
        />
        <button
          onClick={handleNext}
          css={styles.controleButton("next")}
          aria-label="次のページへ"
        >
          <ChevronRight sx={{ color: "#fff" }} fontSize="large" />
        </button>
      </div>
      <ul css={styles.bookSampleList}>
        {bookViewerData.map(({ title, url }, index) => (
          <li
            key={title}
            onClick={() => handleChange(index)}
            onKeyDown={(e) => {
              if (e.code !== "Enter") return;
              handleChange(index);
            }}
            tabIndex={0}
            css={styles.bookSampleListItem(index === currentPage)}
          >
            <Image
              src={`${url}?fit=pad&w=130&h=130&bg=rgb:cccccc`}
              width={130}
              height={130}
              alt={title}
              layout="responsive"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  bookSampleContainer: css(
    mq({
      flexShrink: 0,
      // position: ["static", "sticky"],
      // top: 0,
      width: ["100%", 550],
      marginRight: [0, 32],
      marginBottom: [32, 0],
    })
  ),
  BookViewerAreaConatiner: css({
    position: "relative",
  }),
  BookViewerArea: css({
    overflow: "hidden",
    borderRadius: 8,
  }),
  bookSampleList: css({
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 8,
  }),
  bookSampleListItem: (isActive: boolean) =>
    css({
      overflow: "hidden",
      borderRadius: 4,
      borderStyle: "solid",
      borderWidth: 2,
      borderColor: isActive ? colors.primary.main : "rgba(0, 0, 0, 0)",
      "&:hover": {
        cursor: "pointer",
        opacity: 0.8,
      },
    }),
  controleButton: (type: "prev" | "next") =>
    css({
      zIndex: 1,
      position: "absolute",
      top: 0,
      left: type === "prev" ? 0 : "auto",
      right: type === "next" ? 0 : "auto",
      width: "35px",
      height: "100%",
      cursor: "pointer",
      padding: 0,
      border: "none",
      background: "none",
      textAlign: "center",
      "&:hover": {
        background: "rgba(255, 255, 255, 0.2)",
      },
    }),
};

export { BookViewer };
