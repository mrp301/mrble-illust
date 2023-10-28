import { FC } from "react";
import { css } from "@emotion/react";
import { CommonHead } from "@/components/CommonHead";
import {
  Button,
  Heading,
  TagList,
  BookViewer,
  SpContainer,
  PageBack,
} from "@/components/common";
import { GetStaticProps, GetStaticPaths } from "next";
import { initEnvironment } from "@/relay/fetchGraphQL";
import { fetchQuery } from "react-relay";
// import { RecommendBookList } from "@/components/app";
import { getLayoutDefault } from "@/lib/getLayout";
import { margin } from "@/styles/margin";
import dayjs from "dayjs";
import { mq } from "@/styles/mediaQueries";
import { textStyles } from "@/styles";
import booksQuery from "@/query/books";
import { booksQuery as BooksQuery } from "@/query/__generated__/booksQuery.graphql";
import bookDetailQuery from "@/query/bookDetail";
import { bookDetailQuery as BookDetailQuery } from "@/query/__generated__/bookDetailQuery.graphql";
import { chooseTagColor } from "@/lib/chooseTagColor";
import { Theme } from "@/types/theme";

type Props = {
  booksCollection: BookDetailQuery["response"]["booksCollection"];
  // 型わからん
  initialRecords: unknown;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const environment = initEnvironment();
  const { booksCollection } = await fetchQuery<BooksQuery>(
    environment,
    booksQuery,
    {}
  ).toPromise();

  const paths = booksCollection.items.map((item) => `/book/detail/${item.slug}`);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const { title } = params;
  const environment = initEnvironment();
  const { booksCollection } = await fetchQuery<BookDetailQuery>(
    environment,
    bookDetailQuery,
    {
      slug: title.toString(),
    }
  ).toPromise();

  // fragmentしたい場合はこれもreturnする
  const initialRecords = environment.getStore().getSource().toJSON();

  return {
    props: {
      booksCollection,
      initialRecords,
    },
  };
};

export const BookDetail: WithLayout<FC<Props>> = ({ booksCollection }) => {
  const [bookData] = booksCollection.items;

  return (
    <>
      <CommonHead title={bookData.title} />
      <div css={margin.bottom[16]}>
        <PageBack href="/#books" />
      </div>
      <div css={margin.bottom[32]}>
        <SpContainer vertical={0} horizontal={16}>
          <TagList
            list={bookData.tag.map((name) => ({
              children: name,
              color: chooseTagColor(name),
            }))}
          />
        </SpContainer>
      </div>
      <div css={styles.spContainer}>
        <div
          css={mq({
            marginBottom: [32, 64],
          })}
        >
          <div css={styles.container}>
            <BookViewer fragmentRef={bookData} />
            <div css={styles.bookInfoConatiner}>
              <div css={margin.bottom[32]}>
                <h2 css={[styles.title, margin.bottom[24]]}>{bookData.title}</h2>
                {bookData?.buy && (
                  <a href={bookData.buy} target="_blank" rel="noreferrer" tabIndex={-1}>
                    <Button priority="primary" layout="fill">
                      購入ページへ
                    </Button>
                  </a>
                )}
              </div>

              <div css={margin.bottom[32]}>
                <Heading tag="h3" css={margin.bottom[16]}>
                  概要
                </Heading>
                <p css={[styles.description, textStyles.small]}>
                  {bookData.description.json?.content[0]?.content[0]?.value}
                </p>
              </div>

              <div css={margin.bottom[32]}>
                <Heading tag="h3" css={margin.bottom[16]}>
                  書籍情報
                </Heading>
                <dl css={styles.bookInfoList}>
                  <div>
                    <dt>販売価格</dt>
                    <dd>{bookData.price.toLocaleString()}円</dd>
                  </div>
                  <div>
                    <dt>ページ数</dt>
                    <dd>{bookData.page}</dd>
                  </div>
                  <div>
                    <dt>版型</dt>
                    <dd>{bookData.plateType}</dd>
                  </div>
                  <div>
                    <dt>発売日</dt>
                    <dd>{dayjs(bookData.releaseDate).format("YYYY年M月D日")}</dd>
                  </div>
                  <div>
                    <dt>イベント</dt>
                    <dd>{bookData.event}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
        {/* <Heading tag="h3" css={margin.bottom[16]}>
          関連作品
        </Heading>
        <div css={margin.bottom[32]}>
          <RecommendBookList fragmentRef={data.recommendBooksCollection} />
        </div> */}
        {/* <Breadcrumb
          items={[
            {
              slug: "/",
              text: "トップ",
            },
            {
              slug: `/${bookData.slug}`,
              text: bookData.title,
            },
          ]}
        /> */}
      </div>
    </>
  );
};

const styles = {
  spContainer: css(
    mq({
      padding: ["0 16px", 0],
    })
  ),
  navContainer: css({
    display: "flex",
    alignItems: "center",
  }),
  container: css(
    mq({
      display: "flex",
      alignItems: "flex-start",
      flexDirection: ["column", "row"],
    })
  ),
  title: css(
    mq({
      fontSize: [28, 32],
      fontWeight: "bold",
      lineHeight: 1.2,
    })
  ),
  bookInfoConatiner: css({
    width: "100%",
  }),
  price: css({
    fontWeight: "bold",
    color: "#ff5266",
  }),
  description: css({
    whiteSpace: "pre-wrap",
  }),
  bookInfoList: (theme: Theme) =>
    css([
      {
        display: "grid",
        gridTemplateColumns: "1fr 2fr",
        gap: "4px 4px",
        "> *": {
          display: "contents",
        },
        dt: {
          color: theme.colors.text.light,
        },
      },
      textStyles.small,
    ]),
};

BookDetail.getLayout = getLayoutDefault;
export default BookDetail;
