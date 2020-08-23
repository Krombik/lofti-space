import styled, { css } from "styled-components/macro";
import makeResponsive from "utils/makeResponsive";
import MuiButton from "@material-ui/core/Button";
import { ThemeProps } from "types";
import Grid from "./Grid";

type ResponsiveButton = { fontSize: number; height: number };

export const responsiveButton = makeResponsive(
  ({ theme }, value: ResponsiveButton) => css`
    font-size: ${value.fontSize}px;
    height: ${theme.spacing(value.height)}px;
  `
)({ xs: { fontSize: 11, height: 12 }, md: { fontSize: 16, height: 16 } });

export const responsiveButtonMargin = makeResponsive(
  ({ theme }, value: number) => css`
    margin-top: ${theme.spacing(value)}px;
  `
)({ xs: 5, md: 16 });

const Button = styled(MuiButton)`
  width: 100%;
  ${({ theme }: ThemeProps) => theme.breakpoints.up("md")} {
    max-width: 350px;
  }
  ${responsiveButton}
  ${Grid} & {
    ${responsiveButtonMargin}
  }
`;

export default Button;
