import React, { FC, memo } from "react";
import Grid, {
  DirectionBreakpoints,
  JustifyBreakpoints,
} from "components/styled/Grid";
import RedGrid, { RedBreakpoints } from "containers/common/RedGrid";
import Layout from "components/common/Layout";
import Typography from "components/styled/Typography";
import Button from "components/styled/Button";
import ReactPlayer from "react-player";
import "styled-components/macro";
import makeResponsive from "utils/makeResponsive";
import { css } from "styled-components/macro";
import ArrowIcon from "icons/Arrow";
import PlayButtonIcon from "icons/PlayButtonIcon";

const RED_BREAKPOINTS: RedBreakpoints = {
  lg: { size: 5 },
  sm: { size: 5, position: "top" },
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
  (_, value: string) =>
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
        <Typography variant="h1">О нас</Typography>
        <Typography variant="body2">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </Typography>
        <Button variant="contained" color="primary">
          ПОДРОБНЕЕ
        </Button>
      </Grid>
      <RedGrid item container sm={6} redBreakpoints={RED_BREAKPOINTS}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          height="100vh"
          width="100%"
          light
          playIcon={<PlayButtonIcon />}
          css={`
            ${responsiveHeight}
          `}
        />
      </RedGrid>
    </Layout>
  );
});

export default AboutUs;
