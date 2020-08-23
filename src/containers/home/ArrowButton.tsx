import React, { FC } from "react";
import "styled-components/macro";
import styled, { css } from "styled-components/macro";
import { CustomArrowProps } from "react-slick";
import IconButton, { IconButtonProps } from "@material-ui/core/IconButton";
import ArrowIcon from "icons/Arrow";
import { ThemeProps } from "types";
import makeResponsive from "utils/makeResponsive";
import {
  RedGridProps,
  RedBreakpointsProps,
  ResponsiveRedGrid,
} from "containers/common/RedGrid";

type Props = {
  next?: boolean;
};

type ArrowButtonProps = IconButtonProps & Props & RedBreakpointsProps;

const _IconButton: FC<ArrowButtonProps> = ({
  next,
  redBreakpoints,
  ...props
}) => <IconButton {...props} />;

const buttonSize =
  "calc((100vw - var(--containerGutter-l) * 2 + var(--gridSpacing-l)) / 24)";

const rotateMixin = css`
  svg {
    transform: rotate(180deg);
  }
`;

const responsiveArrowButtonSize = makeResponsive<
  ArrowButtonProps,
  ResponsiveRedGrid
>(({ next }, { position }) => {
  const buttonSize = `calc(${
    position
      ? "var(--containerGutter-t) + var(--headerHeight)"
      : "(100vw - var(--containerGutter-l) * 2 + var(--gridSpacing-l)) / 24"
  } - 0.5px)`;
  return css`
    height: ${buttonSize};
    width: ${buttonSize};
    ${next && `left: ${buttonSize}`}
  `;
});

const StyledIconButton = styled(_IconButton)`
  position: absolute;
  z-index: 2;
  bottom: 0.5px;
  left: 0;
  border-radius: 0px;
  ${({ next }) => next && rotateMixin}
  padding: 0;
  box-shadow: 0 0 0 1px white;
  &,
  &:hover {
    background: ${({ theme }: ThemeProps) => theme.palette.common.white};
  }
  ${({ redBreakpoints }) => responsiveArrowButtonSize(redBreakpoints)}
`;

const ArrowButton: FC<ArrowButtonProps> = ({
  onClick,
  next,
  redBreakpoints,
}) => {
  return (
    <StyledIconButton
      color="primary"
      redBreakpoints={redBreakpoints}
      onClick={onClick}
      next={next}
    >
      <ArrowIcon />
    </StyledIconButton>
  );
};

export default ArrowButton;
