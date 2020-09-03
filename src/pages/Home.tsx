import React, { FC, memo } from "react";
import Grid from "components/styled/Grid";
import { RedBreakpoints } from "containers/common/RedGrid";
import Layout from "components/common/Layout";
import Typography from "@material-ui/core/Typography";
import Button from "components/styled/Button";
import CarouselContainer from "containers/home/CarouselContainer";
import PageInfo from "components/common/PageInfo";

const RED_BREAKPOINTS: RedBreakpoints = {
  lg: { size: 4, right: true },
  sm: { size: 5, right: true, position: "top" },
  xs: { size: 9, right: true, position: "top" },
};

const Home: FC = memo(() => {
  const imgs = new Array(11).fill({ src: "img/img.jpg", alt: "img" });
  return (
    <Layout
      title="lofti"
      titleRight
      redBreakpoints={RED_BREAKPOINTS}
      justify="center"
      wrap="wrap-reverse"
    >
      <Grid item sm={6}>
        <PageInfo
          button={
            <Button variant="contained" color="primary">
              ПОПРОБОВАТЬ БЕСПЛАТНО
            </Button>
          }
        >
          <Typography variant="h1">Комфортная среда Вашей работы</Typography>
          <Typography variant="body1">
            Оцените качественный сервис, записавшись на пробный день уже сегодня
          </Typography>
        </PageInfo>
      </Grid>
      <CarouselContainer
        item
        lg={4}
        sm={6}
        content={imgs}
        redBreakpoints={RED_BREAKPOINTS}
      />
    </Layout>
  );
});

export default Home;
