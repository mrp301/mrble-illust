import React, { FC } from "react";
import { mq } from "@/styles/mediaQueries";
import { css } from "@emotion/react";
import Image from "next/image";
import { useGetQuery } from "@/lib/hooks";
import illustrationQuery from "@/query/illustration";
import { illustrationQuery as IllustrationQuery } from "@/query/__generated__/illustrationQuery.graphql";
import { convertIllustListData } from "@/lib";
import { useQuery } from "relay-hooks";
import { SpContainer } from "../../Container";

type DesktopflexDirection = "column" | "row";

export const IllustViewer: FC = () => {
  const opusNo = useGetQuery("opusNo");
  const { data } = useQuery<IllustrationQuery>(illustrationQuery, {
    opusNo: Number(opusNo),
  });

  const isLoadiing = !data?.illustrationsCollection || !opusNo;
  if (isLoadiing) return null;

  const [illustListData] = convertIllustListData(data.illustrationsCollection.items);
  const { opusNo: no, image, title, createDate } = illustListData;
  const desktopflexDirection: DesktopflexDirection =
    image.width > image.height ? "column" : "row";

  return (
    <>
      <div css={styles.container(desktopflexDirection)}>
        <div css={styles.imageArea(desktopflexDirection)}>
          <Image
            src={image.url}
            alt={`${opusNo}_${title}`}
            width={image.width}
            height={image.height}
            layout="responsive"
            blurDataURL={`${image.url}?fit=thumb`}
            placeholder="blur"
          />
        </div>
        <SpContainer>
          <div css={styles.body(desktopflexDirection)}>
            <h1 css={styles.title}>{title}</h1>
            <div>No:{no}</div>
            <div>{createDate}</div>
          </div>
        </SpContainer>
      </div>
    </>
  );
};

const styles = {
  container: (desktopflexDirection: DesktopflexDirection) =>
    css(
      mq({
        display: "flex",
        alignItems: "flex-start",
        flexDirection: ["column", desktopflexDirection],
      })
    ),
  imageArea: (desktopflexDirection: DesktopflexDirection) =>
    css(
      mq({
        width: ["100%", desktopflexDirection === "row" ? "500px" : "100%"],
        flexShrink: 0,
        marginRight: [0, desktopflexDirection === "row" ? 32 : 0],
      })
    ),
  body: (desktopflexDirection: DesktopflexDirection) =>
    css(
      mq({
        width: "100%",
        padding: ["0", desktopflexDirection === "row" ? "32px 32px 32px 0" : "32px"],
      })
    ),
  title: css(
    mq({
      fontSize: [28, 32],
      fontWeight: "bold",
      lineHeight: 1.2,
      marginBottom: 20,
    })
  ),
};
