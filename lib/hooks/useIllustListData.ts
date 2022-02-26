import { useQuery } from "relay-hooks";
import illustrations from "@/query/illustrations";
import { illustrationsQuery as IllustrationsQuery } from "@/query/__generated__/illustrationsQuery.graphql";
import { IllustListItemType } from "@/components/common";
import dayjs from "dayjs";

type UseIllustListData = () => {
  illustListData: IllustListItemType[] | undefined;
  isLoading: boolean;
};

export const useIllustListData: UseIllustListData = () => {
  const { data } = useQuery<IllustrationsQuery>(illustrations);
  const isLoading = !data?.illustrationsCollection;

  const illustListData: IllustListItemType[] = data?.illustrationsCollection.items.map(
    (illustData) => ({
      title: illustData.title,
      opusNo: illustData.opusNo,
      cover: {
        url: illustData.image.url,
        width: illustData.image.width,
        height: illustData.image.height,
      },
      createDate: dayjs(illustData.createDate).format("YYYY年M月D日"),
    })
  );

  return { illustListData, isLoading };
};
