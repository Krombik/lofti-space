import makeResponsive from "./makeResponsive";
import { css } from "styled-components";
import makeResponsiveVariables from "./makeResponsiveVariables";
import { BreakpointObj } from "types";

const responsiveShadow = makeResponsive(
  (value: [number, number]) =>
    css`
      top: ${value[0]}px;
      filter: blur(${value[1]}px);
    `
)({ xs: [10, 15], md: [40, 30] });

export const shadowMixin = css`
  position: relative;
  &::before {
    content: "";
    z-index: -1;
    display: block;
    position: absolute;
    width: 100%;
    background: rgba(0, 0, 0, 0.2);
    height: 100%;
    ${responsiveShadow}
  }
`;

export type HeightBreakpointsProps = {
  heightBreakpoints: BreakpointObj<number>;
};

export const responsiveHeightMixin = css`
  ${({ heightBreakpoints }: HeightBreakpointsProps) =>
    makeResponsiveVariables({ height: heightBreakpoints })}
  height: calc(
    (100vw - var(--containerGutter-l) * 2 + var(--gridSpacing-l)) *
      var(--height) / 12 - var(--gridSpacing-l)
  );
  max-height: calc(
    100vh - (var(--containerGutter-t) + var(--headerHeight)) * 2
  );
`;
