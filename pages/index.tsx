/** @jsxImportSource @emotion/react */
import React, { VFC } from "react";
import { css } from "@emotion/react";
import { mq } from "@/styles/mediaQueries";
import { CommonHead } from "../components/CommonHead";
import { Container } from "../components";
import { margin } from "../styles/margin";
import { getLayout } from "../lib/getLayout";
import { Heading, BookList, IllustList } from "@/components";
import { useBookListData, useIllustListData } from "@/lib/hooks";
import { HeadingWithMore } from "@/components/app/Index/HeadingWithMore/HeadingWithMore";
import { textStyles, fontWeight } from "@/styles";

const Index: WithLayout<VFC> = () => {
  const { bookListData, isLoading: isBookLoading } = useBookListData();
  const { illustListData, isLoading: isIllustLoading } = useIllustListData();

  if (isBookLoading || isIllustLoading) return null;

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
          <HeadingWithMore tag="h2" href="/" css={margin.bottom[32]}>
            Books<span css={textStyles.large}>({bookListData.length})</span>
          </HeadingWithMore>
          <BookList bookListData={bookListData} />
        </Container>
        <Container vertical={48} horizontal={0}>
          <HeadingWithMore tag="h2" href="/" css={margin.bottom[32]}>
            Illustrations<span css={textStyles.large}>({illustListData.length})</span>
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
