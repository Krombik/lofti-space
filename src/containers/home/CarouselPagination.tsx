import React, { forwardRef } from "react";
import { Img, ThemeProps } from "types";
import styled from "styled-components/macro";
import Slider from "react-slick";
import { TYPOGRAPHY } from "components/styled/Typography";

type Props = {
  content: Img[];
  beforeChange?: () => void;
};

export const StyledCarouselPagination = styled(Slider)`
  .slick {
    &-slide {
      height: calc(
        var(--h3-fontSize) + var(--h3-margin) / 2 -
          (var(--h3-fontSize) - var(--body1-fontSize)) / 4
      );
      > div {
        position: relative;
        top: 50%;
        line-height: 1;
        font-size: calc(var(--body1-fontSize) * 2);
        font-weight: bold;
        transform: translateY(-50%) scale(0.5);
        display: flex;
        align-items: center;
        justify-content: flex-end;
        transition: ${({ theme }: ThemeProps) =>
          theme.transitions.create(["font-size"])};
        > div {
          width: auto !important;
          transform: translateX(50%);
          cursor: pointer;
        }
      }
    }
    &-current > div {
      font-size: calc(var(--h3-fontSize) * 2);
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
        <div key={index}>{`${index < 9 ? 0 : ""}${index + 1}`}</div>
      ))}
    </StyledCarouselPagination>
  )
);

export default CarouselPagination;
