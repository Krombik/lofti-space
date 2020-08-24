import React, { FC } from "react";
import Grid from "components/styled/Grid";
import { Link, LinkProps } from "react-router-dom";
import styled, { css } from "styled-components/macro";
import { GridProps } from "@material-ui/core";
import makeResponsive from "utils/makeResponsive";

const responsiveSize = makeResponsive(
  (_, size: number) => css`
    height: ${size}px;
    width: ${size}px;
  `
)({
  xs: 7,
  md: 16,
});

type Props = { isCurrent: boolean; height: number; path: string };

const _Grid = ({
  height,
  ...props
}: GridProps<"div"> & Pick<Props, "height">) => <Grid {...props} />;

const _Link = ({
  isCurrent,
  ...props
}: LinkProps & Pick<Props, "isCurrent">) => <Link {...props} />;

const StyledNavigationItem = styled(_Grid)`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ height }) => height}%;
`;

const StyledNavigationLink = styled(_Link)`
  ${responsiveSize}
  color: ${({ isCurrent }) => (isCurrent ? "var(--active-color)" : "inherit")};
  ${({ isCurrent }) => isCurrent && "pointer-events: none;"}
  background: currentColor;
`;

const NavigationItem: FC<Props> = ({ isCurrent, height, path }) => (
  <StyledNavigationItem height={height} item xs={12}>
    <StyledNavigationLink
      isCurrent={isCurrent}
      to={path}
    ></StyledNavigationLink>
  </StyledNavigationItem>
);

export default NavigationItem;
