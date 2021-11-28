import { DefaultTheme } from "styled-components";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const breakpoints = ["40em", "52em", "64em", "80em"];

const THEME_TYPOGRAPHY = {
  FONT_FAMILY: {
    ROBOTO: "Roboto, sans-serif",
  },
  FONT_WEIGHT: {
    BLACK: 900,
    BOLD: 700,
    MEDIUM: 500,
    REGULAR: 400,
  },
};

const colors = {
  text: "#333",
  background: "#F8F8F8",
  accent: "#5BCB02",
  black: "#202125",
  white: "#FFFFFF",
};

const theme: DefaultTheme = {
  breakpoints: ["640px", "750px", "828px", "1080px", "1200px"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 22, 24, 30, 32, 34],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  borderRadius: "10px",
  colors,
  typography: {
    body: {
      fontFamily: THEME_TYPOGRAPHY.FONT_FAMILY.ROBOTO,
      fontSize: [2, 3],
      fontWeight: THEME_TYPOGRAPHY.FONT_WEIGHT.REGULAR,
      color: colors.text,
    },
    header: {
      fontFamily: THEME_TYPOGRAPHY.FONT_FAMILY.ROBOTO,
      fontSize: [4, 5],
      fontWeight: THEME_TYPOGRAPHY.FONT_WEIGHT.BOLD,
      color: colors.text,
    },
    caption: {
      fontFamily: THEME_TYPOGRAPHY.FONT_FAMILY.ROBOTO,
      fontSize: [1, 2],
      fontWeight: THEME_TYPOGRAPHY.FONT_WEIGHT.MEDIUM,
      color: colors.text,
    },

    accent: {
      fontFamily: THEME_TYPOGRAPHY.FONT_FAMILY.ROBOTO,
      fontSize: [1, 2],
      fontWeight: THEME_TYPOGRAPHY.FONT_WEIGHT.REGULAR,
      color: colors.accent,
    },
  },
};

export default theme;
