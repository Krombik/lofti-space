import React, { FC, useRef } from "react";
import { Img, BreakpointObj } from "types";
import "styled-components/macro";
import { css } from "styled-components/macro";
import RedGrid, { RedGridProps } from "containers/common/RedGrid";
import makeResponsive from "utils/makeResponsive";
import Slider from "react-slick";
import Carousel, { StyledCarousel } from "./Carousel";
import CarouselPagination, {
  StyledCarouselPagination,
} from "./CarouselPagination";
import { useMediaQuery, Theme } from "@material-ui/core";
import CarouselButtonsContainer from "./CarouselButtonsContainer";

type Props = {
  content: Img[];
};

const responsiveContainer = makeResponsive((_, size: number) => {
  const paginationWidth = 100 / size;
  const sliderWidth = 100 - paginationWidth;
  return css`
    ${StyledCarousel} {
      flex-basis: ${sliderWidth}%;
      max-width: ${sliderWidth}%;
      flex-grow: 0;
    }
    ${StyledCarouselPagination} {
      flex-basis: ${paginationWidth}%;
      max-width: ${paginationWidth}%;
      flex-grow: 0;
    }
  `;
});

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
    <RedGrid
      item
      redBreakpoints={redBreakpoints}
      container
      wrap="nowrap"
      alignItems="center"
      {...props}
      css={`
        height: 100%;
        width: 100%;
        position: relative;
        ${({ lg }: RedGridProps) =>
          responsiveContainer({ lg } as BreakpointObj<number>)}
      `}
    >
      <Carousel
        content={content}
        beforeChange={handleSliderChange}
        ref={slider}
      />
      {moreThanLg && (
        <CarouselPagination
          content={content}
          beforeChange={handleSliderPaginationChange}
          ref={pagination}
        />
      )}
      <CarouselButtonsContainer
        redBreakpoints={redBreakpoints}
        onNextSlide={handleNextSlide}
        onPrevSlide={handlePrevSlide}
      />
    </RedGrid>
  );
};

export default CarouselContainer;
