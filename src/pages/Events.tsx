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
  sm: { size: 9, right: true, position: "item" },
  xs: { size: 0 },
};

const Events: FC = memo(() => {
  const data: TariffType[] = new Array(10).fill({
    title: "Дневной пропуск",
    price: 300,
    slug: "",
  });
  return (
    <Layout
      title="events"
      redBreakpoints={RED_BREAKPOINTS}
      justify="flex-end"
      wrap="wrap"
    >
      <Grid item lg={10}>
        <PageInfo>
          <Typography variant="h2">Актуальные события</Typography>
        </PageInfo>
      </Grid>
      <RedGrid redBreakpoints={RED_BREAKPOINTS} item container lg={10}>
        <CarouselContainer
          items={data}
          renderItem={(props) => <CarouselItem {...props} />}
          redBreakpoints={RED_BREAKPOINTS}
          heightBreakpoints={{ xs: 13, sm: 4 }}
          widthBreakpoints={{ xs: 9, sm: 3 }}
        />
      </RedGrid>
    </Layout>
  );
});

export default Events;
