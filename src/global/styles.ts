import { createGlobalStyle } from "styled-components";
import MontserratRegular from "../fonts/static/Montserrat-Regular.ttf";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 62.5%; // 10px/16px = 62.5% -> 1rem = 10px
    font-family: 'Montserrat', sans-serif;
  }

  // increase performance rather google fonts link html
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: url(${MontserratRegular}) format('truetype');
    font-display: swap;
  }
`;

export default GlobalStyle;
