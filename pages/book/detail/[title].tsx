import React, { FC } from "react";
import { css } from "@emotion/react";
import { CommonHead } from "@/components/CommonHead";
import {
  Breadcrumb,
  Button,
  Heading,
  TextWithChevron,
  TagList,
  BookViewer,
  SpContainer,
} from "@/components/common";
import { RecommendBookList } from "@/components/app";
import { getLayoutDefault } from "@/lib/getLayout";
import { margin } from "@/styles/margin";
import { useGetQuery } from "@/lib/hooks";
import Router from "next/router";
import dayjs from "dayjs";
import { mq } from "@/styles/mediaQueries";
import Link from "next/link";
import { textStyles } from "@/styles";
import { useQuery } from "relay-hooks";
import bookDetailQuery from "@/query/bookDetail";
import { bookDetailQuery as BookDetailQuery } from "@/query/__generated__/bookDetailQuery.graphql";
import { chooseTagColor } from "@/lib/chooseTagColor";
import { Theme } from "@/types/theme";

export const BookDetail: WithLayout<FC> = () => {
  const slug = useGetQuery("title");
  const { data } = useQuery<BookDetailQuery>(bookDetailQuery, {
    slug,
  });

  const isLoadiing = !data?.booksCollection || !slug;
  if (isLoadiing) return null;

  if (!data?.booksCollection?.items.length) {
    Router.push("/404");
    return null;
  }

  const bookData = data.booksCollection.items[0];

  return (
    <>
      <div css={styles.spContainer}>
        <CommonHead title={bookData.title} />
        <div css={[styles.navContainer, margin.bottom[16]]}>
          <Link href="/" scroll={false} passHref>
            <a>
              <TextWithChevron iconPosition="left">Back</TextWithChevron>
            </a>
          </Link>
        </div>
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
            <BookViewer fragmentRef={data.booksCollection.items[0]} />
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
        <Heading tag="h3" css={margin.bottom[16]}>
          関連作品
        </Heading>
        <div css={margin.bottom[32]}>
          <RecommendBookList fragmentRef={data.recommendBooksCollection} />
        </div>
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
