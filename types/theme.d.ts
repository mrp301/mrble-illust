import "@emotion/react";
import { lightColor, darkColor } from "@/constants/";

export type Theme = {
  colors: typeof lightColor | typeof darkColor;
};

declare module "@emotion/react" {
  interface Theme {
    colors: typeof lightColor | typeof darkColor;
  }
}
