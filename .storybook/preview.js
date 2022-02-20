import "../styles/global.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      iPhone678: {
        name: "iPhone6/7/8",
        styles: {
          width: "375px",
          height: "667px",
        },
      },
      iPhoneXR: {
        name: "iPhoneXR",
        styles: {
          width: "414px",
          height: "896px",
        },
      },
      PC: {
        name: "PC",
        styles: {
          width: "1440px",
          height: "1200px",
        },
      },
    },
  },
};
