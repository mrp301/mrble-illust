import React, { VFC } from "react";
import Head from "next/head";

type Props = {
  title: string;
};

export const CommonHead: VFC<Props> = ({ title }) => {
  return (
    <Head>
      <title>mrble-illustration | {title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=no"
      ></meta>
    </Head>
  );
};
