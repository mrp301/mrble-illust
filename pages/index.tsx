import React, { VFC } from "react";
import { css } from "@emotion/react";
import { mq } from "@/styles/mediaQueries";
import { CommonHead } from "../components/CommonHead";
import { getLayout } from "../lib/getLayout";
import { Heading, BookList, IllustList, Container } from "@/components/common";
import { useBookListData, useIllustListData } from "@/lib/hooks";
import { HeadingWithMore } from "@/components/app/Index/HeadingWithMore/HeadingWithMore";
import { margin, textStyles, fontWeight } from "@/styles";

const Index: WithLayout<VFC> = () => {
  const { bookListData, isLoading: isBookLoading } = useBookListData();
  const { illustListData, isLoading: isIllustLoading, total } = useIllustListData(10);

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
            <a>
              Books<span css={textStyles.large}>({bookListData.length})</span>
            </a>
          </HeadingWithMore>
          <BookList bookListData={bookListData} />
        </Container>
        <Container vertical={48} horizontal={0}>
          <HeadingWithMore tag="h2" href="/illustrations/" css={margin.bottom[32]}>
            <a>
              <span css={textStyles.large}>Illustrations({total})</span>
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
