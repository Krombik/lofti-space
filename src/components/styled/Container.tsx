import styled from "styled-components/macro";
import makeResponsiveVariables from "utils/makeResponsiveVariables";
import { ThemeProps, BreakpointObj } from "types";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";

export type SpacingBreakpoints = BreakpointObj<{ t: number; l: number }>;

type ResponsiveGutterProps = {
  gutterBreakpoints: SpacingBreakpoints;
  maxWidth?: Breakpoint;
};

export const spacingFunc = (spacing: number, { theme }: ThemeProps) =>
  `${theme.spacing(spacing)}px`;

const Container = styled.div<ResponsiveGutterProps>`
  ${({ maxWidth, theme }: ResponsiveGutterProps & ThemeProps) =>
    maxWidth && `max-width: ${theme.breakpoints.values[maxWidth]}px;`}
  ${({ gutterBreakpoints }) =>
    makeResponsiveVariables({
      containerGutter: {
        ...gutterBreakpoints,
        func: { t: spacingFunc, l: spacingFunc },
      },
    })}
  padding: var(--containerGutter-t) var(--containerGutter-l);
  width: 100%;
  height: 100%;
`;

export default Container;
