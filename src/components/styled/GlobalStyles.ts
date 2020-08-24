import { createGlobalStyle } from "styled-components";
import { ThemeProps } from "types";
import makeResponsiveVariables from "utils/makeResponsiveVariables";
import { TYPOGRAPHY } from "./Typography";

const responsiveTypographyVariables = makeResponsiveVariables(TYPOGRAPHY);

const GlobalStyle = createGlobalStyle`
  body {
    min-width: 320px; 
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
