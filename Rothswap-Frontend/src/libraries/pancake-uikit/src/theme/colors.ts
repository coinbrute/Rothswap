import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#565f79",
  primaryBright: "#53DEE9",
  primaryDark: "#0098A1",
  secondary: "#7645D9",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const additionalColors = {
  binance: "#F0B90B",
  overlay: "#c194b2",
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#6a7eff",
  background: "#341329",
  backgroundDisabled: "#3c3742",
  backgroundAlt: "#3c2233",
  cardBorder: "#adadb8",
  contrast: "#FFFFFF",
  dropdown: "#080145",
  dropdownDeep: "#030130",
  invertedContrast: "#141326",
  input: "#565f79",
  inputSecondary: "#4b4f75",
  primaryDark: "#0046a1",
  tertiary: "#c4a04c",
  text: "#dcbb6b",
  textDisabled: "#616671",
  textSubtle: "#906e1e",
  disabled: "#4b5363",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #2a2c54 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #2a2c54 0%, #313D5C 100%)",
    cardHeader: "linear-gradient(166.77deg, #3B4155 0%, #303545 100%)",
    blue: "linear-gradient(180deg, #00487f 0%, #7fc7db 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#6a7eff",
  background: "#341329",
  backgroundDisabled: "#3c3742",
  backgroundAlt: "#3c2233",
  cardBorder: "#adadb8",
  contrast: "#FFFFFF",
  dropdown: "#080145",
  dropdownDeep: "#030130",
  invertedContrast: "#141326",
  input: "#565f79",
  inputSecondary: "#4b4f75",
  primaryDark: "#0046a1",
  tertiary: "#c4a04c",
  text: "#eef2ff",
  textDisabled: "#616671",
  textSubtle: "#906e1e",
  disabled: "#4b5363",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #2a2c54 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #2a2c54 0%, #313D5C 100%)",
    cardHeader: "linear-gradient(166.77deg, #3B4155 0%, #303545 100%)",
    blue: "linear-gradient(180deg, #00487f 0%, #7fc7db 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};