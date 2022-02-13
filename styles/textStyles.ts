import { css } from "@emotion/react";

export const textStyles = {
  xsmall: css({
    fontSize: 11,
    lineHeight: 1.5,
  }),
  small: css({
    fontSize: 13,
    lineHeight: 1.5,
  }),
  medium: css({
    fontSize: 15,
    lineHeight: 1.5,
  }),
  large: css({
    fontSize: 18,
    lineHeight: 1.5,
  }),
  xlarge: css({
    fontSize: 20,
    lineHeight: 1.5,
  }),
} as const;
