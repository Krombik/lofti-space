import styled, { css } from "styled-components/macro";
import makeResponsive from "utils/makeResponsive";
import MuiButton from "@material-ui/core/Button";
import { ThemeProps } from "types";

type ResponsiveButton = { fontSize: number; height: number };

const responsiveButton = makeResponsive(
  ({ fontSize, height }: ResponsiveButton, { theme }) => css`
    font-size: ${fontSize}px;
    height: ${theme.spacing(height)}px;
  `
)({ xs: { fontSize: 11, height: 12 }, md: { fontSize: 16, height: 16 } });

const Button = styled(MuiButton)`
  width: 100%;
  ${({ theme }: ThemeProps) => theme.breakpoints.up("md")} {
    max-width: 350px;
  }
  ${responsiveButton}
`;

export default Button;
