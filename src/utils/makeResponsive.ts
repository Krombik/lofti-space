import { ThemeProps, BreakpointObj } from "types";
import { css, FlattenInterpolation } from "styled-components";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";

type Mixin<P, T> = (
  value: T,
  props: P,
  breakpoint: Breakpoint
) => string | FlattenInterpolation<ThemeProps>;

const makeResponsive = <Props, T>(mixin: Mixin<Props & ThemeProps, T>) => (
  responsive: BreakpointObj<T>
) => (props: Props & ThemeProps) =>
  props.theme.breakpoints.keys
    .filter((breakpoint) => responsive[breakpoint] !== undefined)
    .map(
      (breakpoint, index, breakpoints) => css`
        ${props.theme.breakpoints.between(
          breakpoint,
          breakpoints[index + 1]
            ? props.theme.breakpoints.values[breakpoints[index + 1]] - 0.05
            : "xl"
        )} {
          ${mixin(responsive[breakpoint] as T, props, breakpoint)}
        }
      `
    );

export default makeResponsive;
