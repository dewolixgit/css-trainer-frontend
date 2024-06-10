import { createGlobalStyle } from 'styled-components';

import RobotoRegular from 'styles/fonts/Roboto/Roboto-Regular.woff2';
import RubikMedium from 'styles/fonts/Rubik/Rubik-Medium.woff2';
import RubikRegular from 'styles/fonts/Rubik/Rubik-Regular.woff2';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Roboto";
    src: url(${RobotoRegular}) format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Rubik";
    src: url(${RubikRegular}) format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Rubik";
    src: url(${RubikMedium}) format("woff2");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

`;
