import React, { VFC } from "react";
import { CommonHead } from "../components/CommonHead";
import { FadeIn } from "../components/FadeIn";
import { MasonryImageList, ImageType } from "../components";
import { getLayout } from "../lib/getLayout";
import { getImages } from "../lib/firebase";
import { WithLayout } from "../index";

type Props = {
  images: ImageType[];
};

export const getStaticProps = async () => {
  const urls = await getImages("drawing");
  const images = urls.map((url) => ({
    url: `https://storage.cloud.google.com/mrble-illust.appspot.com/${url}`,
    name: url,
  }));

  return {
    props: {
      images,
    },
    revalidate: 10,
  };
};

const Drawing: WithLayout<VFC<Props>> = ({ images }) => {
  return (
    <>
      <CommonHead title="drawing" />
      <FadeIn>{<MasonryImageList images={images} />}</FadeIn>
    </>
  );
};

Drawing.getLayout = getLayout;
export default Drawing;
