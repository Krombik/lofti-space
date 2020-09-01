import React, { forwardRef } from "react";
import { ImgType, ThemeProps } from "types";
import styled from "styled-components/macro";
import Slider from "react-slick";
import indexToTwoDigit from "utils/indexToTwoDigit";

type Props = {
  content: ImgType[];
  beforeChange?: () => void;
};

const StyledCarouselPagination = styled(Slider)`
  .slick {
    &-list {
      width: calc(100% + var(--containerGutter-l));
      padding-right: var(--containerGutter-l);
    }
    &-slide {
      height: calc(
        var(--h3) + ${({ theme }: ThemeProps) => theme.spacing(8)}px -
          (var(--h3) - var(--body1)) / 4
      );
      width: 100% !important;
      > div {
        position: relative;
        top: 50%;
        line-height: 1;
        font-size: calc(var(--body1) * 2);
        font-weight: bold;
        transform: translateY(-50%) scale(0.5);
        display: flex;
        align-items: center;
        justify-content: flex-end;
        transition: ${({ theme }: ThemeProps) =>
          theme.transitions.create(["font-size"])};
        > div {
          color: var(--white);
          width: auto !important;
          transform: translateX(50%);
          cursor: pointer;
        }
      }
    }
    &-current > div {
      font-size: calc(var(--h3) * 2);
    }
  }
`;

const CarouselPagination = forwardRef<Slider, Props>(
  ({ content, beforeChange }, paginationRef) => (
    <StyledCarouselPagination
      infinite={false}
      waitForAnimate={false}
      ref={paginationRef}
      vertical
      slidesToShow={5}
      focusOnSelect
      swipeToSlide
      arrows={false}
      verticalSwiping
      beforeChange={beforeChange}
    >
      {content.map((_, index) => (
        <div key={index}>{indexToTwoDigit(index)}</div>
      ))}
    </StyledCarouselPagination>
  )
);

export default CarouselPagination;
