import React, { FC } from "react";
import MuiContainer, { ContainerProps } from "@material-ui/core/Container";
import styled from "styled-components/macro";
import makeResponsiveVariables from "utils/makeResponsiveVariables";
import { ThemeProps, BreakpointObj } from "types";

export type SpacingBreakpoints = BreakpointObj<{ t: number; l: number }>;

type ResponsiveGutterProps = {
  gutterBreakpoints: SpacingBreakpoints;
};

export const spacingFunc = (spacing: number, { theme }: ThemeProps) =>
  `${theme.spacing(spacing)}px`;

const _Container: FC<ContainerProps & ResponsiveGutterProps> = ({
  gutterBreakpoints,
  ...props
}) => <MuiContainer {...props} />;

const Container = styled(_Container)`
  ${({ gutterBreakpoints }) =>
    makeResponsiveVariables({
      containerGutter: {
        ...gutterBreakpoints,
        func: { t: spacingFunc, l: spacingFunc },
      },
    })}
  padding: var(--containerGutter-t) var(--containerGutter-l);
  height: 100vh;
`;

export default Container;
