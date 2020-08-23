import React, { useRef, useEffect, memo } from "react";
import styled from "styled-components/macro";
import { BreakpointObj, ThemeProps } from "types";
import Grid, { GridProps } from "../../components/styled/Grid";
import { useTheme } from "@material-ui/core";

export type ResponsiveRedGrid = {
  size: number;
  position?: "top" | "item";
  right?: boolean;
};

export type RedBreakpoints = BreakpointObj<ResponsiveRedGrid>;

export type RedBreakpointsProps = {
  redBreakpoints: RedBreakpoints;
};

export type RedGridProps<
  C extends React.ElementType = "div"
> = RedBreakpointsProps & GridProps<C>;

const RedBackground = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: -1;
  & + ${Grid} {
    color: ${({ theme }: ThemeProps) => theme.palette.common.white};
  }
`;

const RedGrid = memo(
  <C extends React.ElementType>({
    redBreakpoints,
    ...props
  }: RedGridProps<C>) => {
    const canvas = useRef<HTMLCanvasElement>(null);
    const theme = useTheme();
    useEffect(() => {
      const ctx = canvas.current?.getContext("2d");
      const container = canvas.current?.parentElement;
      const item = canvas.current?.nextElementSibling as HTMLElement;
      const breakpoints = theme.breakpoints.keys.reduceRight<
        [number, ResponsiveRedGrid][]
      >(
        (acc, curr) =>
          redBreakpoints[curr] !== undefined
            ? [
                ...acc,
                [
                  theme.breakpoints.values[curr] as number,
                  redBreakpoints[curr] as ResponsiveRedGrid,
                ],
              ]
            : acc,
        []
      );
      const handleResize = () => {
        if (ctx && container && item) {
          console.log(
            window
              .getComputedStyle(ctx.canvas)
              .getPropertyValue("--gridSpacing-t")
          );
          const height = document.documentElement.clientHeight;
          const width = document.documentElement.clientWidth;
          ctx.canvas.height = height;
          ctx.canvas.width = width;
          const t = breakpoints.find((item) => item[0] < width);
          if (!t) return;
          const { size, right, position } = t[1];
          ctx.fillStyle = theme.palette.secondary.main;
          const canvasCss = window.getComputedStyle(ctx.canvas);
          const backgroundWidth =
            size !== 12
              ? Math.round(
                  (container.offsetWidth * (size - 6)) / 12 +
                    width / 2 -
                    parseInt(canvasCss.getPropertyValue("--gridSpacing-l"), 10)
                )
              : width;
          ctx.fillRect(
            right ? width - backgroundWidth : 0,
            position !== "item" ? 0 : item.offsetTop,
            backgroundWidth,
            !position
              ? height
              : item.offsetHeight +
                  item.offsetTop -
                  parseInt(canvasCss.getPropertyValue("--gridSpacing-t"), 10) /
                    2 -
                  parseInt(
                    canvasCss.getPropertyValue("--containerGutter-t"),
                    10
                  ) -
                  parseInt(canvasCss.getPropertyValue("--headerHeight"), 10)
          );
        }
      };
      (document as any).fonts.ready.then(async () => {
        handleResize();
      });
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, [redBreakpoints]);
    return (
      <>
        <RedBackground ref={canvas} />
        <Grid {...props} />
      </>
    );
  }
);

export default RedGrid;
