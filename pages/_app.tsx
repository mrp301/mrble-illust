import React, { VFC, ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { AppProps } from "next/app";
import "../styles/global.scss";
import "../styles/MasonryImageList.scss";
import { RelayEnvironmentProvider } from "relay-hooks";
import Environment from "../relay/RelayEnvironment";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App: VFC<AppPropsWithLayout> = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <RelayEnvironmentProvider environment={Environment}>
      {getLayout(<Component {...pageProps} />)}
    </RelayEnvironmentProvider>
  );
};

export default App;
