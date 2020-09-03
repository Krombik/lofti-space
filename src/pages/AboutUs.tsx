import React, { FC, memo, useRef, useEffect } from "react";
import Grid from "components/styled/Grid";
import RedGrid, { RedBreakpoints } from "containers/common/RedGrid";
import Layout from "components/common/Layout";
import Typography from "@material-ui/core/Typography";
import Button from "components/styled/Button";
import ReactPlayer from "react-player";
import "styled-components/macro";
import styled from "styled-components/macro";
import PlayButtonIcon from "icons/PlayButtonIcon";
import {
  shadowMixin,
  responsiveHeightMixin,
  HeightBreakpointsProps,
} from "utils/mixins";
import PageInfo from "components/common/PageInfo";
import responsiveHeight from "utils/responsiveHeight";

const RED_BREAKPOINTS: RedBreakpoints = {
  lg: { size: 5 },
  sm: { size: 6 },
  xs: { size: 9, position: "top" },
};

const PlayerWrapper = styled.div<HeightBreakpointsProps>`
  ${shadowMixin}
  ${responsiveHeightMixin}
  width: 100%;
`;

const AboutUs: FC = memo(() => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => responsiveHeight(ref.current), []);
  return (
    <Layout
      title="about us"
      titleRight
      redBreakpoints={RED_BREAKPOINTS}
      wrap="wrap-reverse"
      direction="row-reverse"
      justify="space-between"
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
      <RedGrid item xs={12} sm={7} lg={6} redBreakpoints={RED_BREAKPOINTS}>
        <PlayerWrapper heightBreakpoints={{ xs: 12, sm: 5, lg: 4 }} ref={ref}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            height="100%"
            width="100%"
            light
            playIcon={<PlayButtonIcon />}
          />
        </PlayerWrapper>
      </RedGrid>
    </Layout>
  );
});

export default AboutUs;
