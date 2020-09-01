import React, { FC, memo } from "react";
import Grid, {
  DirectionBreakpoints,
  JustifyBreakpoints,
} from "components/styled/Grid";
import RedGrid, { RedBreakpoints } from "containers/common/RedGrid";
import Layout from "components/common/Layout";
import Typography from "@material-ui/core/Typography";
import Button from "components/styled/Button";
import ReactPlayer from "react-player";
import "styled-components/macro";
import makeResponsive from "utils/makeResponsive";
import { css } from "styled-components/macro";
import PlayButtonIcon from "icons/PlayButtonIcon";
import { shadowMixin } from "utils/mixins";
import PageInfo from "components/common/PageInfo";

const RED_BREAKPOINTS: RedBreakpoints = {
  lg: { size: 5 },
  sm: { size: 6 },
  xs: { size: 9, position: "top" },
};

const DIRECTION_BREAKPOINTS: DirectionBreakpoints = {
  xs: "column-reverse",
  sm: "row-reverse",
};

const JUSTIFY_BREAKPOINTS: JustifyBreakpoints = {
  xs: "center",
  sm: "space-between",
};

const responsiveHeight = makeResponsive(
  (value: string) =>
    css`
      max-height: ${value};
    `
)({ xs: "calc(100vw - var(--containerGutter-l) * 2)", md: "580px" });

const AboutUs: FC = memo(() => {
  return (
    <Layout
      title="about us"
      titleRight
      redBreakpoints={RED_BREAKPOINTS}
      directionBreakpoints={DIRECTION_BREAKPOINTS}
      justifyBreakpoints={JUSTIFY_BREAKPOINTS}
    >
      <Grid item sm={5}>
        <PageInfo
          button={
            <Button variant="contained" color="primary">
              ПОДРОБНЕЕ
            </Button>
          }
        >
          <Typography variant="h1">О нас</Typography>
          <Typography variant="body2">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </Typography>
        </PageInfo>
      </Grid>
      <RedGrid
        item
        container
        alignContent="center"
        sm={7}
        lg={6}
        redBreakpoints={RED_BREAKPOINTS}
        css={`
          height: 100%;
          ${responsiveHeight}
        `}
      >
        <ReactPlayer
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          height="100%"
          width="100%"
          light
          playIcon={<PlayButtonIcon />}
          css={shadowMixin}
        />
      </RedGrid>
    </Layout>
  );
});

export default AboutUs;
