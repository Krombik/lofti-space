import React, { FC, memo } from "react";
import Grid from "components/styled/Grid";
import Layout from "components/common/Layout";
import Typography from "@material-ui/core/Typography";
import "styled-components/macro";
import { TariffType } from "types";
import PageInfo from "components/common/PageInfo";
import CarouselItem from "components/tariffs/CarouselItem";
import CarouselContainer from "containers/carousel/CarouselContainer";
import RedGrid, { RedBreakpoints } from "containers/common/RedGrid";

const RED_BREAKPOINTS: RedBreakpoints = {
  sm: { size: 2, right: true },
  xs: { size: 0 },
};

const Tariffs: FC = memo(() => {
  const data: TariffType[] = new Array(10).fill({
    title: "Дневной пропуск",
    price: 300,
    slug: "",
  });
  return (
    <Layout
      title="Tariffs"
      titleRight
      redBreakpoints={RED_BREAKPOINTS}
      direction="column"
      alignItems="flex-start"
      justify="center"
    >
      <Grid
        item
        lg={6}
        css={`
          flex-basis: auto;
        `}
      >
        <PageInfo>
          <Typography variant="h2">
            Выберите свой оптимальный вариант
          </Typography>
        </PageInfo>
      </Grid>
      <RedGrid redBreakpoints={RED_BREAKPOINTS} item container>
        <CarouselContainer
          items={data}
          renderItem={(props) => <CarouselItem {...props} />}
          redBreakpoints={RED_BREAKPOINTS}
          sliderBreakpoints={{ xs: { w: 9, h: 13 }, sm: { w: 3, h: 4 } }}
        />
      </RedGrid>
    </Layout>
  );
});

export default Tariffs;
