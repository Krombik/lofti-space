import React, {
  ReactNode,
  useRef,
  forwardRef,
  ForwardRefRenderFunction,
  MutableRefObject,
  ReactElement,
  useLayoutEffect,
} from "react";
import Slider, { Settings } from "react-slick";
import "styled-components/macro";
import styled from "styled-components/macro";
import { shadowMixin } from "utils/mixins";
import makeResponsiveVariables from "utils/makeResponsiveVariables";
import { BreakpointObj } from "types";
import { useTheme } from "@material-ui/core";
import { MAIN_CONTAINER } from "utils/constant";

const Wrapper = styled.div`
  position: relative;
  width: calc(
    (100vw - var(--containerGutter-l) * 2 + var(--gridSpacing-l)) *
      var(--slider-w) / 12 - var(--gridSpacing-l)
  ) !important;
  height: 100%;
`;

type SliderBreakpoints = BreakpointObj<{ h: number; w: number }>;
type SliderProps = Settings & {
  sliderBreakpoints: SliderBreakpoints;
  disableRightGutter?: boolean;
};

const _Slider = forwardRef<Slider, SliderProps & { children: ReactNode }>(
  ({ sliderBreakpoints, disableRightGutter, ...props }, ref) => (
    <Slider {...props} ref={ref} />
  )
);

export const StyledSlider = styled(_Slider)`
  ${({ sliderBreakpoints }) =>
    makeResponsiveVariables({ slider: sliderBreakpoints })}
  width: ${({ disableRightGutter }) =>
    disableRightGutter ? "calc(100% + var(--containerGutter-l))" : "100%"};
  height: calc(
    (100vw - var(--containerGutter-l) * 2 + var(--gridSpacing-l)) *
      var(--slider-h) / 12 - var(--gridSpacing-l)
  );
  max-height: calc(
    100vh - (var(--containerGutter-t) + var(--headerHeight)) * 2
  );
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
  const theme = useTheme();
  const innerRef = useRef<Slider>(null);
  const ref = outerRef || innerRef;
  useLayoutEffect(() => {
    const updateSliderHeight = () => {
      const slider = (ref.current as any).innerSlider.list
        .parentElement as HTMLElement;
      if (document.documentElement.clientWidth < theme.breakpoints.values.sm) {
        const sliderParent = findMainContainerChild(slider.parentElement);
        const restElementsHeight = Array.from(
          sliderParent!.parentElement!.children
        ).reduce(
          (sum, curr) =>
            curr !== sliderParent && curr.tagName !== "CANVAS"
              ? sum + curr.clientHeight
              : sum,
          0
        );
        slider.style.maxHeight = `calc(${
          document.documentElement.clientHeight - restElementsHeight
        }px - var(--headerHeight) - (var(--containerGutter-t)) * 3)`;
      } else slider.removeAttribute("style");
    };
    if (document.readyState !== "loading") updateSliderHeight();
    else window.addEventListener("load", updateSliderHeight);
    window.addEventListener("resize", updateSliderHeight);
    window.addEventListener("orientationchange", updateSliderHeight);
    return () => {
      window.removeEventListener("load", updateSliderHeight);
      window.removeEventListener("resize", updateSliderHeight);
      window.removeEventListener("orientationchange", updateSliderHeight);
    };
  }, []);
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
