import { css } from "@emotion/react";
import { FC } from "react";
import { mq } from "@/styles/mediaQueries";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { textStyles } from "@/styles";
import { Theme } from "@/types/theme";

type Props = {
  title: string;
  opusNo: number;
  image: {
    url: string;
    width: number;
    height: number;
  };
  createDate: string;
  createYear: string;
  listed?: boolean;
};

export type IllustListItemType = Props;

const IMG_HEIGHT = 220;

const IllustListItem: FC<Props> = ({ title, opusNo, image }) => {
  const router = useRouter();

  const width = Math.floor((image.width * IMG_HEIGHT) / image.height);
  return (
    <li css={(theme) => styles.container(width, theme)}>
      <Link
        href={`${router.pathname}?opusNo=${opusNo}`}
        as={`/illustrations/${opusNo}`}
        scroll={false}
      >
        <div css={styles.imageContainer}>
          <Image
            src={`${image.url}?fit=fill&w=${width * 2}&h=${IMG_HEIGHT * 2}`}
            alt={`${opusNo}_${title}`}
            width={width}
            height={IMG_HEIGHT}
            blurDataURL={`${image.url}?fit=thumb`}
            placeholder="blur"
            css={styles.image}
            // TODO:IntersectionObserverに置き換える
            // lazyBoundary={`${IMG_HEIGHT * 2}px`}
          />
        </div>
        <div css={[styles.body, styles.body, textStyles.small]}>
          <div css={styles.opusNo}>{opusNo}</div>
          <div css={styles.title}>{title}</div>
        </div>
      </Link>
    </li>
  );
};

const styles = {
  container: (width: number, theme: Theme) =>
    css({
      width,
      flexGrow: width,
      "&:hover": {
        cursor: "pointer",
        opacity: 0.8,
      },
      a: {
        textDecoration: "none",
        color: theme.colors.text.main,
      },
    }),
  imageContainer: (theme: Theme) =>
    css({
      overflow: "hidden",
      borderRadius: 8,
      border: `1px solid ${theme.colors.glay.light}`,
    }),
  image: () =>
    css({
      display: "block",
      width: "100%",
      height: "auto",
    }),
  body: css(
    mq({
      display: ["none", "flex"],
      alignItems: "flex-start",
      padding: "4px 0 8px",
    })
  ),
  title: css({
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    fontWeight: "bold",
    "&:hover": {
      textDecoration: "underline",
    },
  }),
  opusNo: css({
    marginRight: 4,
  }),
};

export { IllustListItem };
