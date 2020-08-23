import React, { forwardRef } from "react";
import { Img } from "types";
import "styled-components/macro";
import styled from "styled-components/macro";
import Slider from "react-slick";
import ArrowButton from "./ArrowButton";
import { RedBreakpointsProps } from "containers/common/RedGrid";

type Props = {
  content: Img[];
  beforeChange?: (oldIndex: number, newIndex: number) => void;
};

export const StyledCarousel = styled(Slider)`
  height: 100%;
  width: 100%;
  position: relative;
  box-shadow: 0 40px 60px rgba(0, 0, 0, 0.2);
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

const Carousel = forwardRef<Slider, Props & RedBreakpointsProps>(
  ({ content, beforeChange, redBreakpoints }, sliderRef) => (
    <StyledCarousel
      infinite={false}
      ref={sliderRef}
      beforeChange={beforeChange}
      prevArrow={<ArrowButton redBreakpoints={redBreakpoints} />}
      nextArrow={<ArrowButton redBreakpoints={redBreakpoints} next />}
    >
      {content.map((item, index) => (
        <img key={index} src={item.src} alt={item.alt} />
      ))}
    </StyledCarousel>
  )
);

export default Carousel;
