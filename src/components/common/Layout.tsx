import React, { FC } from "react";
import "styled-components/macro";
import Header from "containers/header/Header";
import Container from "../styled/Container";
import BackTitle from "containers/common/BackTitle";
import { RedBreakpointsProps } from "containers/common/RedGrid";
import Grid, { GridProps } from "components/styled/Grid";
import Navigation from "containers/common/Navigation";
import { NavigationType } from "types";

export const LAYOUT_GUTTER = {
  xs: { t: 3, l: 7 },
  lg: { t: 6, l: 16 },
};
export const LAYOUT_SPACING = {
  xs: { t: 3, l: 6 },
  lg: { t: 12, l: 8 },
};

type Props = {
  menu?: boolean;
  title: string;
  titleRight?: boolean;
};

const Layout: FC<Props & GridProps<"div"> & RedBreakpointsProps> = ({
  menu = false,
  title,
  titleRight = false,
  redBreakpoints,
  ...props
}) => (
  <Container maxWidth="xl" gutterBreakpoints={LAYOUT_GUTTER}>
    <Header menu={menu} redBreakpoints={redBreakpoints} />
    {!menu && <Navigation redBreakpoints={redBreakpoints} />}
    <div
      css={`
        height: 100%;
        padding: var(--headerHeight) 0;
        > div {
          height: 100%;
        }
      `}
    >
      <Grid item container>
        <Grid
          container
          alignItems="center"
          wrap="nowrap"
          spacingBreakpoints={LAYOUT_SPACING}
          main
          {...props}
        />
      </Grid>
    </div>
    <BackTitle title={title} right={titleRight} />
  </Container>
);

export default Layout;
