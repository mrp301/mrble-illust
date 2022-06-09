import React, { FC } from "react";
import { CommonHead } from "@/components/CommonHead";
import { SpContainer, IllustListItemType } from "@/components/common";
import { getLayoutDefault } from "@/lib/getLayout";
import { IllustrationsContainer } from "@/components/app";
import { GetStaticProps } from "next";
import { fetchQuery } from "react-relay";
import { initEnvironment } from "@/relay/fetchGraphQL";
import illustrations from "@/query/illustrations";
import { illustrationsQuery as IllustrationsQuery } from "@/query/__generated__/illustrationsQuery.graphql";
import { convertIllustListData } from "@/lib";

type Props = {
  illustListData: IllustListItemType[];
  totalCount: number;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const environment = initEnvironment();
  const { illustrationsCollection } = await fetchQuery<IllustrationsQuery>(
    environment,
    illustrations,
    {
      limit: 100,
    }
  ).toPromise();

  // fragmentしたい場合はこれもreturnする
  // const initialRecords = environment.getStore().getSource().toJSON();

  const illustListData = convertIllustListData(illustrationsCollection.items);

  return {
    props: {
      illustListData,
      totalCount: illustrationsCollection.total,
    },
  };
};

const Illustrations: WithLayout<FC<Props>> = ({ illustListData }) => {
  return (
    <>
      <CommonHead title="イラスト一覧" />
      <SpContainer vertical={0} horizontal={16}>
        <IllustrationsContainer illustList={illustListData} />
      </SpContainer>
    </>
  );
};

Illustrations.getLayout = getLayoutDefault;
export default Illustrations;
