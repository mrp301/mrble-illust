import React from "react";
import { CommonHead } from "../components/CommonHead";
import { FadeIn } from "../components/FadeIn";
import { Container, Card } from "../components";
import { getLayout } from "../lib/getLayout";

const Index = () => {
  return (
    <>
      <CommonHead title="Home" />
      <FadeIn>
        <Card>
          <Container vertical={24} horizontal={24}>
            <h2>■次の予定</h2>
            <p>2021冬コミ：みらりん本</p>
          </Container>
        </Card>
      </FadeIn>
    </>
  );
};

Index.getLayout = getLayout;
export default Index;
