import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <meta name="description" content="過去に描いた絵や同人誌などをまとめたサイト" />
          <meta property="og:url" content="https://mrble-illust.vercel.app/" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="過去に描いた絵や同人誌などをまとめたサイト"
          />
          <meta property="og:image" content="画像のURL" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@tubdaka480" />
          <meta property="og:site_name" content="mrble-illust" />
          <meta property="og:locale" content="ja_JP" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
