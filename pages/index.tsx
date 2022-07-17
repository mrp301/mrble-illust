import React, { FC } from "react";
import { css } from "@emotion/react";
import { mq } from "@/styles/mediaQueries";
import { CommonHead } from "../components/CommonHead";
import { getLayout } from "../lib/getLayout";
import {
  Heading,
  BookList,
  IllustList,
  Container,
  IllustListItemType,
} from "@/components/common";
import { HeadingWithMore } from "@/components/app/Index/HeadingWithMore/HeadingWithMore";
import { margin, textStyles, fontWeight } from "@/styles";
import { GetStaticProps } from "next";
import { fetchQuery } from "react-relay";
import { initEnvironment } from "@/relay/fetchGraphQL";
import { illustrationsQuery as IllustrationsQuery } from "@/query/__generated__/illustrationsQuery.graphql";
import booksQuery from "@/query/books";
import { booksQuery as BooksQuery } from "@/query/__generated__/booksQuery.graphql";
import illustrations from "@/query/illustrations";
import { convertIllustListData } from "@/lib";
import { BookListItemType } from "@/components/common/Book";

type Props = {
  bookListData: BookListItemType[];
  illustListData: IllustListItemType[];
  totalCount: number;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const environment = initEnvironment();
  const { illustrationsCollection } = await fetchQuery<IllustrationsQuery>(
    environment,
    illustrations,
    {
      limit: 10,
    }
  ).toPromise();
  const { booksCollection } = await fetchQuery<BooksQuery>(
    environment,
    booksQuery,
    {}
  ).toPromise();

  const illustListData = convertIllustListData(illustrationsCollection.items);
  const bookListData: BookListItemType[] = booksCollection.items.map((item) => ({
    ...item,
  }));

  return {
    props: {
      bookListData,
      illustListData,
      totalCount: illustrationsCollection.total,
    },
  };
};

const Index: WithLayout<FC<Props>> = ({ bookListData, illustListData, totalCount }) => {
  return (
    <>
      <CommonHead title="Home" />
      <div css={styles.conatiner}>
        <Container vertical={48} horizontal={0}>
          <>
            <Heading tag="h2" css={margin.bottom[32]}>
              Profile
            </Heading>
            <div css={[textStyles.xlarge, fontWeight.bold, margin.bottom[12]]}>mrble</div>
            <p css={textStyles.medium}>
              メイドと量産型と地雷系が好き。趣味で同人誌を描いてます。
              <br />
              本業はフロントエンドエンジニア。
            </p>
          </>
        </Container>
        <Container vertical={48} horizontal={0}>
          <Heading tag="h2" css={margin.bottom[32]}>
            <a>
              Books<span css={textStyles.large}>({bookListData.length})</span>
            </a>
          </Heading>
          <BookList bookListData={bookListData} />
        </Container>
        <Container vertical={48} horizontal={0}>
          <HeadingWithMore tag="h2" href="/illustrations/" css={margin.bottom[32]}>
            <a>
              <span css={textStyles.large}>Illustrations({totalCount})</span>
            </a>
          </HeadingWithMore>
          <IllustList illustList={illustListData} />
        </Container>
      </div>
    </>
  );
};

const styles = {
  conatiner: css(
    mq({
      padding: ["0 16px", 0],
    })
  ),
};

Index.getLayout = getLayout;
export default Index;
