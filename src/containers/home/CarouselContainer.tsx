import React, { FC, useRef } from "react";
import { ImgType } from "types";
import "styled-components/macro";
import RedGrid, { RedGridProps } from "containers/common/RedGrid";
import Slider from "react-slick";
import CarouselPagination from "./CarouselPagination";
import { useMediaQuery, Theme } from "@material-ui/core";
import CarouselButtonsContainer from "../../components/home/CarouselButtonsContainer";
import Carousel from "containers/carousel/Carousel";
import Img from "components/common/Img";
import Grid from "components/styled/Grid";

type Props = {
  content: ImgType[];
};

const CarouselContainer: FC<Props & RedGridProps> = ({
  content,
  redBreakpoints,
  ...props
}) => {
  const slider = useRef<Slider>(null);
  const pagination = useRef<Slider>(null);
  const moreThanLg = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.up("lg")
  );
  const handleSliderChange = moreThanLg
    ? (_: any, index: number) => {
        if ((pagination.current as any).innerSlider.state.targetSlide !== index)
          pagination.current?.slickGoTo(index);
      }
    : undefined;
  const handleSliderPaginationChange = moreThanLg
    ? () => {
        setTimeout(() => {
          if (
            (slider.current as any).innerSlider.state.targetSlide !==
            (pagination.current as any).innerSlider.state.targetSlide
          )
            slider.current?.slickGoTo(
              (pagination.current as any).innerSlider.state.targetSlide
            );
        }, 0);
      }
    : undefined;
  const handleNextSlide = () => {
    slider.current?.slickNext();
  };
  const handlePrevSlide = () => {
    slider.current?.slickPrev();
  };
  return (
    <>
      <RedGrid
        redBreakpoints={redBreakpoints}
        container
        wrap="nowrap"
        alignItems="center"
        {...props}
        css={`
          position: relative;
          margin-left: auto;
        `}
      >
        <Carousel
          items={content}
          renderItem={(props) => <Img src={props.src} alt={props.alt} />}
          heightBreakpoints={{ xs: 14, sm: 8, lg: 6 }}
          widthBreakpoints={{ xs: 12, sm: 6, lg: 4 }}
          beforeChange={handleSliderChange}
          ref={slider}
        />
        <CarouselButtonsContainer
          redBreakpoints={redBreakpoints}
          onNextSlide={handleNextSlide}
          onPrevSlide={handlePrevSlide}
        />
      </RedGrid>
      {moreThanLg && (
        <Grid item lg={1}>
          <CarouselPagination
            content={content}
            beforeChange={handleSliderPaginationChange}
            ref={pagination}
          />
        </Grid>
      )}
    </>
  );
};

export default CarouselContainer;
