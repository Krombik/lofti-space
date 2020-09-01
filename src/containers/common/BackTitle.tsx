import React, { useRef, FC, useEffect } from "react";
import styled, { css } from "styled-components/macro";
import makeResponsive from "utils/makeResponsive";

const responsiveHeight = makeResponsive(
  (value: number) =>
    css`
      width: ${value}%;
      height: ${value}%;
    `
)({ xs: 62, md: 100 });

const StyledCanvas = styled.canvas<{ right?: boolean }>`
  position: absolute;
  top: 0;
  ${({ right }) => (right ? "right" : "left")}: 0;
  z-index: -1;
  ${responsiveHeight}
`;

type Props = { title: string; right?: boolean };

const BackTitle: FC<Props> = ({ title, right }) => {
  const canvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const ctx = canvas.current?.getContext("2d");
    const text = title.toUpperCase();
    const handleResize = () => {
      if (ctx) {
        const height = document.documentElement.clientHeight;
        const width = document.documentElement.clientWidth;
        ctx.canvas.height = height;
        ctx.canvas.width = width;
        ctx.font = "bold 1px Latinka";
        const fontSize = height / ctx.measureText(text).width;
        ctx.font = `bold ${fontSize}px Latinka`;
        ctx.textBaseline = right ? "alphabetic" : "top";
        ctx.translate(right ? width - fontSize / 12 : 0, height);
        ctx.rotate(-Math.PI / 2);
        ctx.fillStyle = "rgba(0,0,0,0.05)";
        ctx.fillText(text, 0, 0);
      }
    };
    if ((document as any).fonts.check("bold 1px Latinka")) handleResize();
    else
      (document as any).fonts.ready.then(async () => {
        await (document as any).fonts.load("bold 1px Latinka");
        handleResize();
      });
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [title, right]);
  return <StyledCanvas ref={canvas} right={right} />;
};

export default BackTitle;
