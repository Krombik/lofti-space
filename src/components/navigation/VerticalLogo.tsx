import React, { FC } from "react";
import Grid from "components/styled/Grid";
import "styled-components/macro";
import makeResponsive from "utils/makeResponsive";
import { css } from "styled-components/macro";

const responsiveFontSize = makeResponsive(
  (value: number) =>
    css`
      font-size: ${value}px;
    `
)({ xs: 7, md: 14 });

const VerticalLogo: FC = ({ children }) => (
  <Grid
    item
    css={`
      display: grid;
      flex-direction: column;
      transform: translateX(50%);
    `}
  >
    <div
      css={`
        padding: 50% 0;
        height: 0;
        transform: translateX(-50%);
        align-items: center;
        display: flex;
        justify-content: center;
      `}
    >
      <div
        css={`
          transform: rotate(-90deg);
          white-space: nowrap;
          text-transform: uppercase;
          font-weight: bold;
          line-height: 1 !important;
          ${responsiveFontSize}
        `}
      >
        {children}
      </div>
    </div>
  </Grid>
);

export default VerticalLogo;
