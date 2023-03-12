import React, { FC } from "react";
import Image from "next/image";
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
  IllustViewerModal,
} from "@/components/common";
import { HeadingWithMore } from "@/components/app/Index/HeadingWithMore/HeadingWithMore";
import { margin, textStyles, fontWeight } from "@/styles";
import { GetStaticProps } from "next";
import { fetchQuery } from "react-relay";
import { initEnvironment } from "@/relay/fetchGraphQL";
import { illustrationsListedQuery as IllustrationsListedQuery } from "@/query/__generated__/illustrationsListedQuery.graphql";
import illustrationsListed from "@/query/illustrationsListed";
import { illustrationsCountQuery as IllustrationsCountQuery } from "@/query/__generated__/illustrationsCountQuery.graphql";
import illustrationsCount from "@/query/illustrationsCount";
import booksQuery from "@/query/books";
import { booksQuery as BooksQuery } from "@/query/__generated__/booksQuery.graphql";
import { convertIllustListData } from "@/lib";
import { BookListItemType } from "@/components/common/Book";

type Props = {
  bookListData: BookListItemType[];
  illustListData: IllustListItemType[];
  totalCount: number;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const environment = initEnvironment();

  const {
    illustrationsCollection: { total },
  } = await fetchQuery<IllustrationsCountQuery>(
    environment,
    illustrationsCount,
    {}
  ).toPromise();

  const { illustrationsCollection } = await fetchQuery<IllustrationsListedQuery>(
    environment,
    illustrationsListed,
    {}
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
      totalCount: total,
    },
  };
};

const Index: WithLayout<FC<Props>> = ({ bookListData, illustListData, totalCount }) => {
  return (
    <>
      <CommonHead title="Home" />
      <div css={styles.conatiner}>
        <Container vertical={48} horizontal={0}>
          <div css={styles.profile}>
            <Image
              src="/images/mrble-profile-icon.jpg"
              width={283}
              height={283}
              alt="mrbleのアイコン"
              css={styles.profileImage}
            />
            <div css={styles.profileText}>
              <div css={[textStyles.xxlarge, fontWeight.bold, margin.bottom[8]]}>
                mrble
              </div>
              <p css={textStyles.medium}>かわいい絵がすき。趣味で同人誌を描いてます。</p>
            </div>
          </div>
        </Container>
        <Container vertical={48} horizontal={0}>
          <Heading id="books" tag="h2" css={margin.bottom[32]}>
            Books<span css={textStyles.large}>({bookListData.length})</span>
          </Heading>
          <BookList bookListData={bookListData} />
        </Container>
        <Container vertical={48} horizontal={0}>
          <HeadingWithMore
            id="illustrations"
            tag="h2"
            href="/illustrations/"
            css={margin.bottom[32]}
          >
            Illustrations<span css={textStyles.large}>({totalCount})</span>
          </HeadingWithMore>
          <IllustList illustList={illustListData} />
        </Container>
      </div>
      <IllustViewerModal />
    </>
  );
};

const styles = {
  conatiner: css(
    mq({
      padding: ["0 16px", 0],
    })
  ),
  profile: css(
    mq({
      display: "flex",
      alignItems: "center",
      flexDirection: ["column", "row"],
    })
  ),
  profileText: css(
    mq({
      textAlign: ["center", "left"],
    })
  ),
  profileImage: css(
    mq({
      marginRight: [0, 16],
      marginBottom: [16, 0],
      borderRadius: "50%",
      width: 100,
      height: 100,
    })
  ),
};

Index.getLayout = getLayout;
export default Index;
