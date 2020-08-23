import React, { FC } from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const ArrowIcon: FC = () => (
  <SvgIcon>
    <g transform="translate(4)">
      <path d="M0,0H2.828V16.971H0Z" transform="translate(0 12) rotate(-45)" />
      <path d="M0,0H2.828V16.971H0Z" transform="translate(12 0) rotate(45)" />
    </g>
  </SvgIcon>
);

export default ArrowIcon;
