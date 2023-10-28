import { FC } from "react";
import { mq } from "@/styles/mediaQueries";
import { css } from "@emotion/react";
import { CommonHead } from "@/components/CommonHead";
import Image from "next/image";
import { getLayoutDefault } from "@/lib/getLayout";
import { useGetQuery } from "@/lib/hooks";
import illustrationQuery from "@/query/illustration";
import { illustrationQuery as IllustrationQuery } from "@/query/__generated__/illustrationQuery.graphql";
import { convertIllustListData } from "@/lib";
import { useQuery } from "relay-hooks";

export const IllustView: WithLayout<FC> = () => {
  const opusNo = useGetQuery("opusNo");
  const { data } = useQuery<IllustrationQuery>(illustrationQuery, {
    opusNo: Number(opusNo),
  });

  const isLoadiing = !data?.illustrationsCollection || !opusNo;
  if (isLoadiing) return null;

  const [illustListData] = convertIllustListData(data.illustrationsCollection.items);
  const { opusNo: no, image, title, createDate } = illustListData;

  return (
    <>
      <CommonHead title={title} />
      <div css={styles.spContainer}>
        <div css={styles.container}>
          <div css={styles.imageArea}>
            <Image
              src={image.url}
              alt={`${opusNo}_${title}`}
              width={image.width}
              height={image.height}
              blurDataURL={`${image.url}?fit=thumb`}
              placeholder="blur"
            />
          </div>
          <div>
            <h1 css={styles.title}>{title}</h1>
            <div>No:{no}</div>
            <div>{createDate}</div>
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  spContainer: css(
    mq({
      padding: ["0 16px", 0],
    })
  ),
  container: css(
    mq({
      display: "flex",
      alignItems: "flex-start",
      flexDirection: ["column", "row"],
    })
  ),
  imageArea: css(
    mq({
      width: ["100%", "600px"],
      flexShrink: 0,
      marginRight: [0, 32],
      marginBottom: [16, 0],
      // maxHeight: "100vh",
    })
  ),
  title: css(
    mq({
      fontSize: [28, 32],
      fontWeight: "bold",
      lineHeight: 1.2,
    })
  ),
};

IllustView.getLayout = getLayoutDefault;
export default IllustView;
