import React, {
  ReactNode,
  useRef,
  forwardRef,
  ForwardRefRenderFunction,
  MutableRefObject,
  ReactElement,
  useLayoutEffect,
  useEffect,
} from "react";
import Slider, { Settings } from "react-slick";
import "styled-components/macro";
import styled from "styled-components/macro";
import { shadowMixin, responsiveHeightMixin } from "utils/mixins";
import makeResponsiveVariables from "utils/makeResponsiveVariables";
import { BreakpointObj } from "types";
import { MAIN_CONTAINER } from "utils/constant";
import responsiveHeight from "utils/responsiveHeight";

const Wrapper = styled.div`
  position: relative;
  width: calc(
    (100vw - var(--containerGutter-l) * 2 + var(--gridSpacing-l)) * var(--width) /
      12 - var(--gridSpacing-l)
  ) !important;
  height: 100%;
`;
type SliderProps = Settings & {
  heightBreakpoints: BreakpointObj<number>;
  widthBreakpoints: BreakpointObj<number>;
  disableRightGutter?: boolean;
};

const _Slider = forwardRef<Slider, SliderProps & { children: ReactNode }>(
  ({ heightBreakpoints, disableRightGutter, ...props }, ref) => (
    <Slider {...props} ref={ref} />
  )
);

export const StyledSlider = styled(_Slider)`
  ${responsiveHeightMixin}
  width: ${({ disableRightGutter }) =>
    disableRightGutter ? "calc(100% + var(--containerGutter-l))" : "100%"};
  ${({ widthBreakpoints }) =>
    makeResponsiveVariables({ width: widthBreakpoints })}
  ${shadowMixin}
  .slick {
    &-list {
      height: 100%;
    }
    &-track {
      height: 100%;
      display: flex;
    }
    &-slide {
      padding-right: var(--gridSpacing-l);
      > div {
        height: 100%;
        width: 100%;
        overflow: hidden;
      }
    }
  }
`;

const findMainContainerChild = (
  item: HTMLElement | null
): HTMLElement | null => {
  if (!item?.parentElement) return null;
  if (item?.parentElement?.classList.contains(MAIN_CONTAINER)) return item;
  return findMainContainerChild(item.parentElement);
};

export type CarouselProps<T> = {
  renderItem: (props: T, index: number) => ReactNode;
  items: T[];
} & SliderProps;

const Carousel = forwardRef((<T extends any>(
  { renderItem, items, ...props }: CarouselProps<T>,
  outerRef: MutableRefObject<Slider | null> | null
) => {
  const innerRef = useRef<Slider>(null);
  const ref = outerRef || innerRef;
  useLayoutEffect(
    () =>
      responsiveHeight(
        (ref.current as any).innerSlider.list.parentElement as HTMLElement
      ),
    []
  );
  return (
    <StyledSlider
      ref={ref}
      variableWidth
      infinite={false}
      arrows={false}
      {...props}
    >
      {items.map((item, index) => (
        <Wrapper key={index} children={renderItem(item, index)} />
      ))}
    </StyledSlider>
  );
}) as ForwardRefRenderFunction<Slider, any>);

declare function _Carousel<T extends any>(
  props: CarouselProps<T> & { ref?: MutableRefObject<Slider | null> }
): ReactElement;

export default Carousel as typeof _Carousel;
