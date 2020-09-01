import { createGlobalStyle } from "styled-components";
import { ThemeProps } from "types";
import makeResponsiveVariables from "utils/makeResponsiveVariables";
import { TYPOGRAPHY } from "./Typography";

const responsiveTypographyVariables = makeResponsiveVariables(TYPOGRAPHY);

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
