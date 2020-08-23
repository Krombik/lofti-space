import React from "react";
import MuiGrid, {
  GridProps as MuiGridProps,
  GridDirection,
} from "@material-ui/core/Grid";
import styled, { css } from "styled-components/macro";
import { BreakpointObj } from "types";
import makeResponsive from "utils/makeResponsive";
import { SpacingBreakpoints, spacingFunc } from "./Container";
import makeResponsiveVariables from "utils/makeResponsiveVariables";

export type DirectionBreakpoints = BreakpointObj<GridDirection>;

export type ResponsiveSpacingProps = {
  spacingBreakpoints?: SpacingBreakpoints;
  directionBreakpoints?: DirectionBreakpoints;
  main?: boolean;
};

export type GridProps<C extends React.ElementType> = ResponsiveSpacingProps &
  MuiGridProps<C, { component?: C }>;

const _Grid = <C extends React.ElementType>({
  spacingBreakpoints,
  directionBreakpoints,
  main,
  ...props
}: GridProps<C>) => <MuiGrid {...props} />;

const responsiveGridDirection = makeResponsive(
  (_, value: GridDirection) => css`
    flex-direction: ${value};
  `
);

const containerMixin = css`
  margin: calc(0px - var(--gridSpacing-t) / 2)
    calc(0px - var(--gridSpacing-l) / 2);
  width: calc(100% + var(--gridSpacing-l));
  > .MuiGrid-item {
    padding: calc(var(--gridSpacing-t) / 2) calc(var(--gridSpacing-l) / 2);
  }
`;

const mainContainerMixin = css`
  ${({ theme }) => theme.breakpoints.down("md")} {
    margin-top: 0;
  }
`;

const Grid = styled(_Grid)`
  ${({ spacingBreakpoints, container }) =>
    container &&
    spacingBreakpoints &&
    makeResponsiveVariables({
      gridSpacing: {
        ...spacingBreakpoints,
        func: { t: spacingFunc, l: spacingFunc },
      },
    })}
  ${({ spacingBreakpoints, container }) =>
    container && spacingBreakpoints && containerMixin}
  ${({ directionBreakpoints, container }) =>
    container &&
    directionBreakpoints &&
    responsiveGridDirection(directionBreakpoints)}
  ${({ main }) => main && mainContainerMixin}
  
`;

export default Grid as typeof _Grid & typeof Grid;
