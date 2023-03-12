import { illustrationsQuery as IllustrationsQuery } from "@/query/__generated__/illustrationsQuery.graphql";
import { illustrationsListedQuery as IllustrationsListedQuery } from "@/query/__generated__/illustrationsListedQuery.graphql";
import { IllustListItemType } from "@/components/common";
import dayjs from "dayjs";

type Data =
  | IllustrationsQuery["response"]["illustrationsCollection"]["items"]
  | IllustrationsListedQuery["response"]["illustrationsCollection"]["items"];

export const convertIllustListData = (data: Data): IllustListItemType[] => {
  return data.map((item) => ({
    ...item,
    createDate: dayjs(item.createDate).format("YYYY年M月D日"),
    createYear: dayjs(item.createDate).format("YYYY年"),
  }));
};
