export const commonColor = {
  black: "#222",
  white: "#FFF",
  brown: "#BF8383",
  red: "#EB8E8E",
  pink: "#E69FB4",
  purple: "#D770CC",
  blue: "#9492E9",
  green: "#54C566",
  yellow: "#DADC74",
  primary: {
    main: "#C51162",
    light: "#FD558F",
    dark: "#8E0038",
  },
} as const;

export const lightColor = {
  ...commonColor,
  baseColor: "#FFF",
  text: {
    main: "#1F1F1F",
    light: "#858585",
    lighter: "#D6D6D6",
  },
  glay: {
    light: "#858585",
    lighter: "#D6D6D6",
  },
} as const;

export const darkColor = {
  ...commonColor,
  baseColor: "#222",
  text: {
    main: "#FFF",
    light: "#858585",
    lighter: "#474747",
  },
  glay: {
    light: "#858585",
    lighter: "#474747",
  },
} as const;
