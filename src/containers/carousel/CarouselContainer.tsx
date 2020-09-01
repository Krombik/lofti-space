import React, { useRef } from "react";
import "styled-components/macro";
import Carousel, { CarouselProps } from "containers/carousel/Carousel";
import { IconButton, useMediaQuery, Theme } from "@material-ui/core";
import ArrowLeft from "icons/ArrowLeft";
import ArrowRight from "icons/ArrowRight";
import {
  RedBreakpointsProps,
  ResponsiveRedGrid,
} from "containers/common/RedGrid";
import Slider from "react-slick";
import makeResponsive from "utils/makeResponsive";
import { css } from "styled-components/macro";

const responsiveButtonColor = makeResponsive(
  (value: ResponsiveRedGrid) => css`
    color: var(
      --${value.position || (value.size !== 12 && !value.right) ? "primary" : "white"}
    );
  `
);

const CarouselContainer = <T extends any>({
  redBreakpoints,
  ...props
}: CarouselProps<T> & Partial<RedBreakpointsProps>) => {
  const slider = useRef<Slider>(null);
  const moreThanSm = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.up("sm")
  );
  const handleNextSlide = () => {
    slider.current?.slickNext();
  };
  const handlePrevSlide = () => {
    slider.current?.slickPrev();
  };
  return (
    <div
      css={`
        position: relative;
        width: 100%;
        height: 100%;
      `}
    >
      <Carousel disableRightGutter {...props} ref={slider} />
      {moreThanSm && (
        <div
          css={`
            position: absolute;
            ${redBreakpoints
              ? responsiveButtonColor(redBreakpoints)
              : "color: var(--primary);"}
            top: 100%;
            display: flex;
            height: calc((100vh - 100%) / 2);
            align-items: center;
            justify-content: space-between;
            right: 0;
            min-width: calc(
              (100vw - var(--containerGutter-l) * 2 + var(--gridSpacing-l)) / 12 -
                var(--gridSpacing-l)
            );
          `}
        >
          <IconButton color="inherit" onClick={handlePrevSlide}>
            <ArrowRight />
          </IconButton>
          <IconButton color="inherit" onClick={handleNextSlide}>
            <ArrowLeft />
          </IconButton>
        </div>
      )}
    </div>
  );
};

export default CarouselContainer;
