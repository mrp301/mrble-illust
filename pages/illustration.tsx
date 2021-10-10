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

const hoge = [
  "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/104_i_want_to_ru _tmb.jpg",
  "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/112_reimu_alice_caffe _tmb.jpg",
  "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/114_reimu _tmb.jpg",
  "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/115_sleep _tmb.jpg",
  "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/119_ntr _tmb.jpg",
  "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/120_ruhn _tmb.jpg",
  // "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/121_club _tmb.jpg",
  // "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/126_2017 _tmb.jpg",
  // "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/151_reimu _tmb.jpg",
  // "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/152_rail_alice _tmb.jpg",
  // "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/174-2018あけおめ _tmb.jpg",
  // "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/187 みらいチャンネル _tmb.jpg",
  // "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/192 EMO-birth-day _tmb.jpg",
  // "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/202 あけおめ2019 _tmb.jpg",
  // "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/211 食事中 _tmb.jpg",
  // "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/223 ミリオンフラワー _tmb.jpg",
  // "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/229 キラッCHUと空中浮遊するみらい _tmb.jpg",
  // "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/233 2019夏服みらい _tmb.jpg",
  // "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/238 もももも萌黄 _tmb.jpg",
  // "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/241 クール!! _tmb.jpg",
  // "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/242 そうなんだ _tmb.jpg",
  // "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/244 AUTUMNLIVE2019 _tmb.jpg",
  // "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/246 すいはに3 _tmb.jpg",
  // "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/252 プリパレ _tmb.jpg",
  // "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/255-ウィンター感想 _tmb.jpg",
  // "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/257-C97レポ _tmb.jpg",
  // "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/258-みこ _tmb.jpg",
  // "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/268_ときめき _tmb.jpg",
  // "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/271_花見 _tmb.jpg",
  // "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/272_KSKM _tmb.jpg",
  // "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/273_ずっとも _tmb.jpg",
  // "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/274_ミラクルコースター色 _tmb.jpg",
  // "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/275_ミラクルコースターカラー _tmb.jpg",
  // "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/276_ミラクルコースターカラー _tmb.jpg",
  // "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/278_キス _tmb.jpg",
  // "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/279_にじりん _tmb.jpg",
  // "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/280_青葉さん _tmb.jpg",
  // "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/284_アンジュさんをお願いします！ _tmb.jpg",
  // "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/290_ロリータ系 _tmb.jpg",
  // "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/292_ハロウィン _tmb.jpg",
  // "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/293_めいどりーみん桃山 _tmb.jpg",
  // "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/294_winter虹ノ咲4 _tmb.jpg",
  // "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/296_さくか _tmb.jpg",
  // "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/297_める _tmb.jpg",
  // "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/298_あんな _tmb.jpg",
  // "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/300_v _tmb.jpg",
  // "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/301_2021 _tmb.jpg",
  // "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/303_さらみら _tmb.jpg",
  // "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/304_20210328 _tmb.jpg",
  // "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/305_インスタ虹ノ咲 _tmb.jpg",
  // "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/308_Nirbana2 _tmb.jpg",
  // "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/311_Nirbana4 _tmb.jpg",
  // "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/312-桃山争奪戦 _tmb.jpg",
  // "https://storage.cloud.google.com/mrble-illust.appspot.com/illustration/tmb/313_キラッツ _tmb.jpg",
];

export const getStaticProps = async () => {
  // const urls = await getImages("illustration/tmb");
  // const images = urls.map((url) => ({
  //   url: `"https://storage.cloud.google.com/mrble-illust.appspot.com/${url}`,
  //   name: url,
  // }));
  // const images = [
  //   {
  //     url: "hoge",
  //     name: "hoge",
  //   },
  // ];

  const images = hoge.map((url) => ({
    url,
    name: "alt",
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
      {/* {images.map(({ url }) => (
        <p key={url}>{url}</p>
      ))} */}
      <p>非表示</p>
      <p>
        更新日時：<time dateTime={update}>{update}</time>
      </p>
    </>
  );
};

Illustration.getLayout = getLayout;
export default Illustration;
