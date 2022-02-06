/** @jsxImportSource @emotion/react */
import React, { VFC } from "react";
import { css } from "@emotion/react";
import Image from "next/image";
import { CommonHead } from "../../../components/CommonHead";
import { Card, Container } from "../../../components/";
import { getLayoutDefault } from "../../../lib/getLayout";
import { margin } from "../../../styles/margin";
import { useGetQuery } from "../../../lib/hooks";
import Router from "next/router";
import dayjs from "dayjs";

import { useQuery } from "relay-hooks";
import bookDetailQuery from "../../../query/bookDetail";
import { bookDetailQuery as BookDetailQuery } from "../../../query/__generated__/bookDetailQuery.graphql";

export const BookDetail: WithLayout<VFC> = () => {
  const slug = useGetQuery("title");
  const { data } = useQuery<BookDetailQuery>(bookDetailQuery, {
    slug,
  });

  if (!data?.booksCollection) return null;
  if (!data.booksCollection.items[0]?.title) {
    Router.push("/404");
    return null;
  }

  const bookData = data.booksCollection.items[0];

  return (
    <>
      <CommonHead title="drawing" />
      <Card>
        <Container>
          <div css={styles.container}>
            <div css={margin.right[32]}>
              <Image
                src={bookData.cover.url}
                width={bookData.cover.width / 2}
                height={bookData.cover.height / 2}
                alt={bookData.cover.title}
                layout="intrinsic"
              />
            </div>
            <div>
              <h2 css={margin.bottom[24]}>{bookData.title}</h2>
              {/* <h3>■概要</h3> */}
              {/* <p>{JSON.parse(bookData.description.json)}</p> */}
              <h3 css={margin.bottom[24]}>■書籍情報</h3>
              <table>
                <tbody>
                  <tr>
                    <th>ページ数</th>
                    <td>{bookData.page}</td>
                  </tr>
                  <tr>
                    <th>版型</th>
                    <td>{bookData.plateType}</td>
                  </tr>
                  <tr>
                    <th>発売日</th>
                    <td>{dayjs(bookData.releaseDate).format("YYYY年M月D日")}</td>
                  </tr>
                  <tr>
                    <th>イベント</th>
                    <td>{bookData.event}</td>
                  </tr>
                  <tr>
                    <th>金額</th>
                    <td>¥{bookData.price.toLocaleString()}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Card>
    </>
  );
};

const styles = {
  container: css({
    display: "flex",
  }),
};

BookDetail.getLayout = getLayoutDefault;
export default BookDetail;
