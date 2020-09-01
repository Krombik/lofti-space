import React, { FC } from "react";
import { ThemeProps } from "types";
import "styled-components/macro";
import styled, { css } from "styled-components/macro";
import { RedGridProps, ResponsiveRedGrid } from "containers/common/RedGrid";
import makeResponsive from "utils/makeResponsive";
import ArrowButton from "./ArrowButton";
import ArrowRightIcon from "icons/ArrowRight";
import ArrowLeftIcon from "icons/ArrowLeft";

const buttonSize = (height: boolean, position?: string) =>
  `calc(${
    position
      ? `(var(--containerGutter-t) + var(--headerHeight))${
          height ? "" : " * 2"
        }`
      : `(100vw - var(--containerGutter-l) * 2 + var(--gridSpacing-l)) / ${
          height ? 24 : 12
        }`
  })`;

const responsiveArrowButtonSize = makeResponsive(
  ({ position }: ResponsiveRedGrid) => css`
    height: ${buttonSize(true, position)};
    width: ${buttonSize(false, position)};
  `
);

const StyledCarouselButtonsContainerWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: inherit;
  padding-top: 0;
  padding-right: 0;
`;

const StyledCarouselButtonsContainer = styled.div<RedGridProps>`
  ${({ redBreakpoints }) => responsiveArrowButtonSize(redBreakpoints)}
  background: var(--white);
  overflow: hidden;
`;

type Props = { onPrevSlide: () => void; onNextSlide: () => void };

const CarouselButtonsContainer: FC<RedGridProps & Props> = ({
  redBreakpoints,
  onNextSlide,
  onPrevSlide,
}) => (
  <StyledCarouselButtonsContainerWrapper>
    <StyledCarouselButtonsContainer redBreakpoints={redBreakpoints}>
      <ArrowButton color="primary" onClick={onPrevSlide}>
        <ArrowRightIcon />
      </ArrowButton>
      <ArrowButton color="primary" onClick={onNextSlide}>
        <ArrowLeftIcon />
      </ArrowButton>
    </StyledCarouselButtonsContainer>
  </StyledCarouselButtonsContainerWrapper>
);

export default CarouselButtonsContainer;
