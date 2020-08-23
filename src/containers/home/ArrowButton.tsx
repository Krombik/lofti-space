import React, { FC } from "react";
import "styled-components/macro";
import styled, { css } from "styled-components/macro";
import IconButton, { IconButtonProps } from "@material-ui/core/IconButton";
import ArrowIcon from "icons/Arrow";

type Props = {
  next?: boolean;
};

type ArrowButtonProps = IconButtonProps & Props;

const _IconButton: FC<ArrowButtonProps> = ({ next, ...props }) => (
  <IconButton {...props} />
);

const rotateMixin = css`
  svg {
    transform: rotate(180deg);
  }
`;

const StyledIconButton = styled(_IconButton)`
  border-radius: 0px;
  ${({ next }) => next && rotateMixin}
  padding: 0;
  height: 100%;
  width: 50%;
  .MuiTouchRipple-root {
    span {
      position: absolute;
      top: 0;
      left: -50%;
      top: -50%;
      height: 200%;
      width: 200%;
    }
  }
`;

const ArrowButton: FC<ArrowButtonProps> = ({ onClick, next }) => {
  return (
    <StyledIconButton color="primary" onClick={onClick} next={next}>
      <ArrowIcon />
    </StyledIconButton>
  );
};

export default ArrowButton;
