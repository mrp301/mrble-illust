import { colors } from "@/constants";

type ColorKey = keyof Omit<typeof colors, "black">;

type ColorTheme = {
  name: string;
  color: ColorKey;
}[];

const colorTheme: ColorTheme = [
  {
    name: "虹ノ咲だいあ",
    color: "brown",
  },
  {
    name: "赤城あんな",
    color: "red",
  },
  {
    name: "博麗霊夢",
    color: "red",
  },
  {
    name: "小悪魔",
    color: "red",
  },
  {
    name: "桃山みらい",
    color: "pink",
  },
  {
    name: "紫藤める",
    color: "purple",
  },
  {
    name: "パチュリー・ノーレッジ",
    color: "purple",
  },
  {
    name: "青葉りんか",
    color: "blue",
  },
  {
    name: "青葉ユヅル",
    color: "blue",
  },
  {
    name: "緑川さら",
    color: "green",
  },
  {
    name: "萌黄えも",
    color: "yellow",
  },
  {
    name: "アリス・マーガトロイド",
    color: "yellow",
  },
  {
    name: "黒川すず",
    color: "glay",
  },
  {
    name: "金森まりあ",
    color: "yellow",
  },
];

export const chooseTagColor = (text: string): ColorKey => {
  const chooseColor = colorTheme.find(({ name }) => name === text);
  return chooseColor?.color ?? "glay";
};
