import { createGlobalStyle } from "styled-components";
import { ThemeProps } from "types";
import makeResponsiveVariables from "utils/makeResponsiveVariables";

const responsiveTypographyVariables = makeResponsiveVariables({
  h1: {
    xs: "30px",
    lg: "80px",
  },
  h2: {
    xs: "30px",
    lg: "60px",
  },
  h3: {
    xs: "30px",
    lg: "40px",
  },
  body1: {
    xs: "16px",
    lg: "24px",
  },
  body2: {
    xs: "14px",
    lg: "18px",
  },
  button: {
    xs: "11px",
    lg: "16px",
  },
});

const GlobalStyle = createGlobalStyle`
  body {
    scroll-behavior: smooth;
    min-width: 320px; 
    max-height: 100%;
    height: 100%;
    -webkit-overflow-scrolling: touch;
    position: fixed;
    width: 100vw;
    #root {
      height: 100%;
    }
  }
  :root {
    ${responsiveTypographyVariables}
    --primary: ${({ theme }: ThemeProps) => theme.palette.primary.main};
    --red: #D6304D;
    --pink: #F6CED5;
    --grey: #707070;
    --white: #fff;
    --black: #000;
  }
`;

export default GlobalStyle;
