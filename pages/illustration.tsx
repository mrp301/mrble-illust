import React, { VFC } from "react";
import { CommonHead } from "../components/CommonHead";
import { FadeIn } from "../components/FadeIn";
import { MasonryImageList, ImageType } from "../components";
import { getImages } from "../lib/firebase";
import { getLayout } from "../lib/getLayout";
import { WithLayout } from "../index";
import "dayjs/locale/ja";
import dayjs from "dayjs";

type Props = {
  images: ImageType[];
  update: string;
};

export const getStaticProps = async () => {
  const urls = await getImages("illustration");
  const images = urls.map((url) => ({
    url: `https://storage.cloud.google.com/mrble-illust.appspot.com/${url}`,
    name: url,
  }));

  const update = dayjs().locale("ja").format("YYYY年M月D日hh時mm分ss秒");

  return {
    props: {
      images,
      update,
    },
    // revalidate: 10,
  };
};

const Illustration: WithLayout<VFC<Props>> = ({ images, update }) => {
  return (
    <>
      <CommonHead title="Illustration" />
      <FadeIn>{images && <MasonryImageList images={images} />}</FadeIn>
      <p>
        更新日時：<time dateTime={update}>{update}</time>
      </p>
    </>
  );
};

Illustration.getLayout = getLayout;
export default Illustration;
