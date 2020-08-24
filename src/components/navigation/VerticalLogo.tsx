import React, { FC } from "react";
import Grid from "components/styled/Grid";
import "styled-components/macro";

const VerticalLogo: FC = ({ children }) => (
  <Grid
    item
    css={`
      display: table;
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
        `}
      >
        {children}
      </div>
    </div>
  </Grid>
);

export default VerticalLogo;
