import React, { forwardRef } from "react";
import { Img } from "types";
import "styled-components/macro";
import styled, { css } from "styled-components/macro";
import Slider from "react-slick";
import makeResponsive from "utils/makeResponsive";

type Props = {
  content: Img[];
  beforeChange?: (oldIndex: number, newIndex: number) => void;
};

const responsiveShadow = makeResponsive(
  (_, value: [number, number]) =>
    css`
      box-shadow: 0 ${value[0]}px ${value[1]}px rgba(0, 0, 0, 0.2);
    `
)({ xs: [10, 30], md: [40, 60] });

export const StyledCarousel = styled(Slider)`
  height: 100%;
  width: 100%;
  ${responsiveShadow}
  .slick {
    &-list {
      height: 100%;
    }
    &-track {
      height: 100%;
    }
    &-slide > div {
      height: 100%;
      width: 100%;
      position: relative;
      overflow: hidden;
      img {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        height: 100%;
        width: auto !important;
      }
    }
  }
`;

const Carousel = forwardRef<Slider, Props>(
  ({ content, beforeChange }, sliderRef) => (
    <StyledCarousel
      infinite={false}
      ref={sliderRef}
      beforeChange={beforeChange}
      arrows={false}
    >
      {content.map((item, index) => (
        <img key={index} src={item.src} alt={item.alt} />
      ))}
    </StyledCarousel>
  )
);

export default Carousel;
