import React, { FC } from "react";
import styled, { css } from "styled-components/macro";
import MuiLink, { LinkProps as MuiLinkProps } from "@material-ui/core/Link";
import { Link, LinkProps } from "react-router-dom";
import { ThemeProps } from "types";
import makeResponsive from "utils/makeResponsive";

type ResponsiveMenuLink = {
  paddingBottom: number;
  lineWidth: { normal: number; hover: number };
};

const responsiveMenuLink = makeResponsive(
  ({ theme }, value: ResponsiveMenuLink) => css`
    padding-bottom: ${theme.spacing(value.paddingBottom)}px;
    &::after {
      width: ${value.lineWidth.normal}%;
    }
    &:hover::after {
      width: ${value.lineWidth.hover}%;
    }
  `
)({
  lg: {
    paddingBottom: 2,
    lineWidth: { normal: 50, hover: 75 },
  },
  xs: {
    paddingBottom: 1,
    lineWidth: { normal: 75, hover: 100 },
  },
});

const _MenuLink: FC<LinkProps & MuiLinkProps> = (props) => (
  <MuiLink component={Link} {...props} />
);

const MenuLink = styled(_MenuLink)`
  position: relative;
  display: block;
  font-size: var(--h3-fontSize);
  font-weight: bold;
  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 3px;
    left: 0;
    height: 3px;
    background: currentColor;
    transition: ${({ theme }: ThemeProps) => theme.transitions.create("width")};
  }
  ${responsiveMenuLink}
`;

export default MenuLink;
