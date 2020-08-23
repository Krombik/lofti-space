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
  }
`;

export default GlobalStyle;
