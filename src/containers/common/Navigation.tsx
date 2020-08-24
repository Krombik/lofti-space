import React, { FC } from "react";
import Grid from "components/styled/Grid";
import { RedBreakpointsProps, ResponsiveRedGrid } from "./RedGrid";
import pages from "router/pages";
import "styled-components/macro";
import { useLocation } from "react-router-dom";
import makeResponsive from "utils/makeResponsive";
import { css } from "styled-components/macro";
import NavigationItem from "components/navigation/NavigationItem";
import VerticalLogo from "components/navigation/VerticalLogo";

const NAVIGATION_SPACING = { xs: { t: 2, l: 0 }, md: { t: 6, l: 0 } };

const responsiveColor = makeResponsive(
  (_, value: ResponsiveRedGrid) => css`
    color: var(--${value.right ? "grey" : "pink"});
    --active-color: var(--${value.right ? "primary" : "white"});
  `
);

const Navigation: FC<RedBreakpointsProps> = ({ redBreakpoints }) => {
  const location = useLocation();
  const currPageIndex = pages.findIndex(
    (item) => item.path === location.pathname
  );
  const height = 100 / (pages.length + 1);
  return (
    <div
      css={`
        position: absolute;
        left: 0;
        top: 0;
        padding: var(--containerGutter-t) 0;
        height: 100%;
        ${responsiveColor(redBreakpoints)}
      `}
    >
      <Grid
        container
        spacingBreakpoints={NAVIGATION_SPACING}
        direction="column"
        wrap="nowrap"
        css={`
          height: 100%;
          left: 0;
          width: var(--containerGutter-l);
        `}
      >
        <Grid item xs={12}>
          <Grid
            container
            justify="center"
            alignContent="center"
            css={`
              position: relative;
              height: 100%;
              &::before {
                content: "";
                display: block;
                position: absolute;
                z-index: 0;
                top: 0;
                height: 100%;
                width: 2px;
                background: currentColor;
              }
            `}
          >
            {pages.map(({ path }, index) => (
              <NavigationItem
                path={path}
                key={index}
                isCurrent={currPageIndex === index}
                height={height}
              />
            ))}
          </Grid>
        </Grid>
        <VerticalLogo>lofti space</VerticalLogo>
      </Grid>
    </div>
  );
};

export default Navigation;
