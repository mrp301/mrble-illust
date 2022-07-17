import React, { FC, ReactNode, createContext, useContext } from "react";
import { css, Global } from "@emotion/react";
import { ThemeProvider as Provider } from "@emotion/react";
import { darkColor } from "@/constants";

const chooseTeheme = darkColor;

const ThemeColor = createContext({ colors: chooseTeheme });

export const useTheme = (): { colors: typeof chooseTeheme } => {
  const theme = useContext(ThemeColor);
  return theme;
};

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          html {
            background-color: ${chooseTeheme.baseColor};
          }
          body,
          a {
            color: ${chooseTeheme.text.main};
          }
        `}
      />
      <ThemeColor.Provider value={{ colors: chooseTeheme }}>
        <Provider theme={{ colors: chooseTeheme }}>{children}</Provider>
      </ThemeColor.Provider>
    </>
  );
};
