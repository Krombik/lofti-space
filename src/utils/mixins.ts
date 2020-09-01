import makeResponsive from "./makeResponsive";
import { css } from "styled-components";

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
    display: block;
    position: absolute;
    width: 100%;
    background: rgba(0, 0, 0, 0.2);
    height: 100%;
    ${responsiveShadow}
  }
`;
