/** @jsxImportSource @emotion/react */
import React, { VFC } from "react";
import { css } from "@emotion/react";
import { CommonHead } from "../components/CommonHead";
import { FadeIn } from "../components/FadeIn";
import { Container, Card } from "../components";
import { margin } from "../styles/margin";
import { getLayout } from "../lib/getLayout";
import { BookList } from "../components/Book";
import { useBookListData } from "../lib/hooks";

const Index: WithLayout<VFC> = () => {
  const { bookListData, isLoading } = useBookListData();
  if (isLoading) return null;

  return (
    <>
      <CommonHead title="Home" />
      <Card>
        <Container vertical={24} horizontal={24}>
          <h2 css={margin.bottom[24]}>■同人誌一覧</h2>
          <FadeIn>
            <BookList bookListData={bookListData} />
          </FadeIn>
        </Container>
      </Card>
    </>
  );
};

Index.getLayout = getLayout;
export default Index;
