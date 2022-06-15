import { createGlobalStyle } from "styled-components";
import fontRegular from "./fonts/GT-Eesti-Display-Regular.otf";
import fontMedium from "./fonts/GT-Eesti-Display-Medium.otf";

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: "GT Eesti Pro Display";
    src: local("GT Eesti Pro Display"), url(${fontRegular}) format('opentype');
    font-weight: ${(props) => props.theme.regular};
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "GT Eesti Pro Display";
    src: local("GT Eesti Pro Display"), url(${fontMedium}) format('opentype');
    font-weight: ${(props) => props.theme.medium};
    font-style: normal;
    font-display: swap;
  } ;

`;

export default GlobalFonts;
