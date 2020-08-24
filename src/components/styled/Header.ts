import styled, { css } from "styled-components";
import makeResponsive from "utils/makeResponsive";
import { BreakpointObj } from "types";
import makeResponsiveVariables from "utils/makeResponsiveVariables";
import { spacingFunc } from "./Container";
import { RedGridProps, ResponsiveRedGrid } from "containers/common/RedGrid";

// redBreakpoints[item as Breakpoint]!.position === "item" ||
//   (redBreakpoints[item as Breakpoint]!.size !== 12 &&
//     !redBreakpoints[item as Breakpoint]!.right)

const responsiveHeaderColor = makeResponsive(
  (_, value: ResponsiveRedGrid) => css`
    color: var(
      --${value.position === "item" || value.size !== 12 || value.right ? "black" : "white"}
    );
  `
);

const responsiveHeaderFontSize = makeResponsive(
  (_, value: number) => css`
    font-size: ${value}px;
  `
)({ xs: 11, md: 20 });

const HEADER_HEIGHT_BREAKPOINTS = { md: 16, xs: 8 };

const responsiveHeaderHeightVariables = makeResponsiveVariables(
  { headerHeight: { ...HEADER_HEIGHT_BREAKPOINTS, func: spacingFunc } },
  true
);

const Header = styled.header<RedGridProps>`
  z-index: 5;
  position: absolute;
  font-weight: bolder;
  text-transform: uppercase;
  top: 0;
  left: 0;
  width: 100%;
  padding: inherit;
  padding-bottom: 0;
  ${({ redBreakpoints }) => responsiveHeaderColor(redBreakpoints)}
  ${responsiveHeaderHeightVariables}
  * {
    ${responsiveHeaderFontSize}
  }
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
