import React, { FC, memo } from "react";
import Grid from "@material-ui/core/Grid";
import "styled-components/macro";
import { Link } from "react-router-dom";
import LangSelect from "./LangSelect";
import Burger from "./Burger";
import StyledHeader from "components/styled/Header";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";
import { RedBreakpointsProps } from "containers/common/RedGrid";

type Props = { menu: boolean };

const Header: FC<Props & RedBreakpointsProps> = memo(
  ({ menu, redBreakpoints }) => (
    <StyledHeader
      colorBreakpoints={Object.fromEntries(
        Object.keys(redBreakpoints).map((item) => [
          item,
          redBreakpoints[item as Breakpoint]!.position === "item" ||
            (redBreakpoints[item as Breakpoint]!.size !== 12 &&
              !redBreakpoints[item as Breakpoint]!.right),
        ])
      )}
    >
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
                height: 100%;
                width: auto;
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
          spacing={6}
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
