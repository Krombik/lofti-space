import React, { FC } from "react";
import { ThemeProps } from "types";
import "styled-components/macro";

const PlayButtonIcon: FC = () => (
  <svg
    viewBox="0 0 150 100"
    css={`
      width: 17.444%;
      height: auto;
    `}
  >
    <path
      d="M20,0H130a20,20,0,0,1,20,20V80a20,20,0,0,1-20,20H20A20,20,0,0,1,0,80V20A20,20,0,0,1,20,0Z"
      css={`
        fill: ${({ theme }: ThemeProps) => theme.palette.secondary.main};
      `}
    />
    <path
      d="M6447.042,3286.508v48.764l40.611-25.463Z"
      transform="translate(-6392.042 -3260.508)"
      fill="#fff"
    />
  </svg>
);

export default PlayButtonIcon;
