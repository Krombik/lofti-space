import styled, { css } from "styled-components";
import makeResponsive from "utils/makeResponsive";
import { BreakpointObj } from "types";
import makeResponsiveVariables from "utils/makeResponsiveVariables";
import { spacingFunc } from "./Container";

const responsiveHeaderColor = makeResponsive(
  ({ theme }, value: boolean) => css`
    color: ${theme.palette.common[value ? "black" : "white"]};
  `
);

export const HEADER_HEIGHT_BREAKPOINTS = { md: 16, xs: 8 };

const responsiveHeaderHeightVariables = makeResponsiveVariables(
  { headerHeight: { ...HEADER_HEIGHT_BREAKPOINTS, func: spacingFunc } },
  true
);

type Props = { colorBreakpoints: BreakpointObj<boolean> };

const Header = styled.header<Props>`
  z-index: 5;
  position: absolute;
  font-weight: bolder;
  text-transform: uppercase;
  top: 0;
  left: 0;
  width: 100%;
  padding: inherit;
  padding-bottom: 0;
  ${({ colorBreakpoints }: Props) => responsiveHeaderColor(colorBreakpoints)}
  ${responsiveHeaderHeightVariables}
  > div {
    height: var(--headerHeight);
    button {
      padding: 0;
      min-width: 0;
      font-weight: inherit;
      color: inherit;
      background: transparent;
      &:hover {
        background: transparent;
      }
    }
  }
`;

export default Header;
