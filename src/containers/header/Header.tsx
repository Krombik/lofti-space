import React, { FC, memo } from "react";
import "styled-components/macro";
import { Link } from "react-router-dom";
import LangSelect from "./LangSelect";
import Burger from "./Burger";
import StyledHeader from "components/styled/Header";
import { RedBreakpointsProps } from "containers/common/RedGrid";
import Grid from "components/styled/Grid";

type Props = { menu: boolean };

const HEADER_BUTTONS_SPACING = { xs: { t: 0, l: 3 }, md: { t: 0, l: 6 } };

const Header: FC<Props & Partial<RedBreakpointsProps>> = memo(
  ({ menu, redBreakpoints }) => (
    <StyledHeader redBreakpoints={redBreakpoints}>
      <Grid container>
        {!menu && (
          <Grid
            item
            xs
            css={`
              display: flex;
              height: 100%;
              a {
                display: inline-flex;
              }
              img {
                height: var(--headerHeight);
                width: var(--headerHeight);
              }
            `}
          >
            <Link to="/">
              <img src="/logo.png" alt="lofti space" />
            </Link>
          </Grid>
        )}
        <Grid
          item
          container
          spacingBreakpoints={HEADER_BUTTONS_SPACING}
          xs={!menu}
          justify="flex-end"
          alignItems="center"
        >
          <Grid item>
            <LangSelect />
          </Grid>
          <Grid
            item
            css={`
              display: flex;
            `}
          >
            <Burger menu={menu} />
          </Grid>
        </Grid>
      </Grid>
    </StyledHeader>
  )
);

export default Header;
