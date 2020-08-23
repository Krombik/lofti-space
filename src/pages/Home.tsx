import React, { FC, memo } from "react";
import Grid, { DirectionBreakpoints } from "components/styled/Grid";
import { RedBreakpoints } from "containers/common/RedGrid";
import Layout from "components/common/Layout";
import Typography from "components/styled/Typography";
import Button from "components/styled/Button";
import CarouselContainer from "containers/home/CarouselContainer";

const RED_BREAKPOINTS: RedBreakpoints = {
  lg: { size: 4, right: true },
  sm: { size: 5, right: true, position: "top" },
  xs: { size: 9, right: true, position: "top" },
};

const DIRECTION_BREAKPOINTS: DirectionBreakpoints = {
  xs: "column-reverse",
  sm: "row",
};

const Home: FC = memo(() => {
  const imgs = new Array(10).fill({ src: "img/img.jpg", alt: "img" });
  return (
    <Layout
      title="lofti"
      titleRight
      redBreakpoints={RED_BREAKPOINTS}
      directionBreakpoints={DIRECTION_BREAKPOINTS}
      justify="space-between"
    >
      <Grid item sm={6}>
        <Typography variant="h1">Комфортная среда Вашей работы</Typography>
        <Typography variant="body1">
          Оцените качественный сервис, записавшись на пробный день уже сегодня
        </Typography>
        <Button variant="contained" color="primary">
          ПОПРОБОВАТЬ БЕСПЛАТНО
        </Button>
      </Grid>
      <CarouselContainer
        content={imgs}
        lg={5}
        sm={6}
        redBreakpoints={RED_BREAKPOINTS}
      />
    </Layout>
  );
});

export default Home;
