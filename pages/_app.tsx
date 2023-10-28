import { FC, ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { AppProps } from "next/app";
import "../styles/global.scss";
import "../styles/MasonryImageList.scss";
import { ReactRelayContext } from "react-relay";
import { useEnvironment } from "@/relay/fetchGraphQL";
import { ThemeProvider } from "@/components/common";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App: FC<AppPropsWithLayout> = ({ Component, pageProps }) => {
  const environment = useEnvironment(pageProps.initialRecords);
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ReactRelayContext.Provider value={{ environment }}>
      <ThemeProvider>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
    </ReactRelayContext.Provider>
  );
};

export default App;
