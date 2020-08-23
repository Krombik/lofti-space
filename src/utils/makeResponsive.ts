import { ThemeProps, BreakpointObj } from "types";
import { css, FlattenInterpolation } from "styled-components";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";

type Mixin<P, T> = (
  props: P,
  value: T,
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
          ${mixin(props, responsive[breakpoint] as T, breakpoint)}
        }
      `
    );

export default makeResponsive;
