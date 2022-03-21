import React, { VFC } from "react";
import { CommonHead } from "@/components/CommonHead";
import { SpContainer } from "@/components/common";
import { getLayoutDefault } from "@/lib/getLayout";
import { useIllustListData } from "@/lib/hooks";
import { IllustrationsContainer } from "@/components/app";

const Illustrations: WithLayout<VFC> = () => {
  const { illustListData, isLoading: isIllustLoading } = useIllustListData(100);

  return (
    <>
      <CommonHead title="イラスト一覧" />

      <SpContainer vertical={0} horizontal={16}>
        {!isIllustLoading && <IllustrationsContainer illustList={illustListData} />}
      </SpContainer>
    </>
  );
};

Illustrations.getLayout = getLayoutDefault;
export default Illustrations;
