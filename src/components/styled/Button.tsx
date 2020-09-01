import styled, { css } from "styled-components/macro";
import makeResponsive from "utils/makeResponsive";
import MuiButton from "@material-ui/core/Button";
import { ThemeProps } from "types";

const responsiveHeight = makeResponsive(
  (height: number, { theme }) => css`
    height: ${theme.spacing(height)}px;
  `
)({ xs: 12, md: 16 });

const Button = styled(MuiButton)`
  width: 100%;
  ${({ theme }: ThemeProps) => theme.breakpoints.up("md")} {
    max-width: 350px;
  }
  ${responsiveHeight}
`;

export default Button;
