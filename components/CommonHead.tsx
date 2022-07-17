import React, { FC } from "react";
import Head from "next/head";

type Props = {
  title: string;
};

export const CommonHead: FC<Props> = ({ title }) => {
  return (
    <Head>
      <title>mrble-illustration | {title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=no"
      ></meta>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <meta name="description" content="過去に描いた絵や同人誌などをまとめたサイト" />
      <meta property="og:url" content="https://mrble-illustration-mrp301.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="過去に描いた絵や同人誌などをまとめたサイト"
      />
      <meta property="og:title" content="mrble-illustration" />
      <meta
        property="og:image"
        content="https://mrble-illustration-mrp301.vercel.app/images/ogp.jpg"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@tubdaka616" />
      <meta property="og:site_name" content="mrble-illustration" />
      <meta property="og:locale" content="ja_JP" />
    </Head>
  );
};
