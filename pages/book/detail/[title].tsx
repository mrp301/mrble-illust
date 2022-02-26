import React, { VFC } from "react";
import { css } from "@emotion/react";
import Image from "next/image";
import { CommonHead } from "@/components/CommonHead";
import { Breadcrumb, Button, Heading, TextWithChevron } from "@/components/common";
import { getLayoutDefault } from "@/lib/getLayout";
import { margin } from "@/styles/margin";
import { useGetQuery } from "@/lib/hooks";
import Router from "next/router";
import dayjs from "dayjs";
import { mq } from "@/styles/mediaQueries";
import Link from "next/link";
import { textStyles } from "@/styles";

import { useQuery } from "relay-hooks";
import bookDetailQuery from "../../../query/bookDetail";
import { bookDetailQuery as BookDetailQuery } from "../../../query/__generated__/bookDetailQuery.graphql";

export const BookDetail: WithLayout<VFC> = () => {
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
    <div css={styles.spContainer}>
      <CommonHead title={bookData.title} />
      <div css={[styles.navContainer, margin.bottom[16]]}>
        <Link href="/" scroll={false} passHref>
          <a>
            <TextWithChevron iconPosition="left">Back</TextWithChevron>
          </a>
        </Link>
      </div>
      <div css={margin.bottom[32]}>
        <div css={styles.container}>
          <div css={styles.bookSampleContainer}>
            <div css={margin.bottom[8]}>
              <Image
                src={`${bookData.cover.url}?fit=pad&w=550&h=550&bg=rgb:cccccc`}
                alt={bookData.cover.title}
                width={550}
                height={550}
                layout="responsive"
              />
            </div>
            <ul css={styles.bookSampleList}>
              {bookData.samplePagesCollection.items.map((sample) => (
                <li key={sample.title}>
                  <Image
                    src={`${sample.url}?fit=pad&w=130&h=130&bg=rgb:cccccc`}
                    width={130}
                    height={130}
                    alt={sample.title}
                    layout="responsive"
                  />
                </li>
              ))}
            </ul>
          </div>

          <div css={styles.bookInfoConatiner}>
            <div css={margin.bottom[32]}>
              <Heading tag="h2" css={margin.bottom[12]}>
                {bookData.title}
              </Heading>
              {bookData?.buy && (
                <a href={bookData.buy} target="_blank" rel="noreferrer">
                  <Button layout="fill">購入</Button>
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
              <dl css={[styles.bookInfoList, textStyles.medium]}>
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

            <div css={margin.bottom[16]}>
              <Heading tag="h3" css={margin.bottom[12]}>
                タグ
              </Heading>
              <ul>
                {bookData.tag.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Breadcrumb
        items={[
          {
            slug: "/",
            text: "トップ",
          },
          {
            slug: "/books",
            text: "書籍一覧",
          },
          {
            slug: `/${bookData.slug}`,
            text: bookData.title,
          },
        ]}
      />
    </div>
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
  bookSampleContainer: css(
    mq({
      flexShrink: 0,
      // position: ["static", "sticky"],
      // top: 0,
      width: ["100%", 550],
      marginRight: [0, 32],
    })
  ),
  bookSampleList: css({
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 8,
  }),
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
  bookInfoList: css({
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "12px 4px",
    "> *": {
      display: "contents",
    },
    dt: {
      fontWeight: "bold",
    },
  }),
};

BookDetail.getLayout = getLayoutDefault;
export default BookDetail;
