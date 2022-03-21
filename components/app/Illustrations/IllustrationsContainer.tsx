import React, { VFC } from "react";
import { IllustList } from "@/components/common";
import { IllustListItemType, Heading } from "@/components/common";
import { margin, textStyles } from "@/styles";

type Props = {
  illustList: IllustListItemType[];
};

export const IllustrationsContainer: VFC<Props> = ({ illustList }) => {
  // TDDO:Server側へ処理移動させる
  const splitYear = [...new Set(illustList.map(({ createYear }) => createYear))];
  const convertImageData: IllustListItemType[][] = splitYear.reduce((acc, cur) => {
    return [...acc, illustList.filter(({ createYear }) => createYear === cur)];
  }, []);

  return (
    <>
      {convertImageData.map((illustList) => (
        <div key={illustList[0].createYear} css={margin.bottom[48]}>
          <Heading tag="h2" css={margin.bottom[32]}>
            {illustList[0].createYear}
            <span css={textStyles.large}>({illustList.length})</span>
          </Heading>
          <IllustList illustList={illustList} />
        </div>
      ))}
    </>
  );
};
