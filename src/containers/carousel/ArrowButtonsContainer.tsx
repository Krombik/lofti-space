import React, { useRef, FC, useEffect } from "react";
import "styled-components/macro";
import { IconButton } from "@material-ui/core";
import ArrowLeft from "icons/ArrowLeft";
import ArrowRight from "icons/ArrowRight";
import {
  RedBreakpointsProps,
  ResponsiveRedGrid,
} from "containers/common/RedGrid";
import makeResponsive from "utils/makeResponsive";
import { css } from "styled-components/macro";

const responsiveButtonColor = makeResponsive(
  (value: ResponsiveRedGrid) => css`
    color: var(
      --${value.position || (value.size !== 12 && !value.right) ? "primary" : "white"}
    );
  `
);

type Props = { next: () => void; prev: () => void };

const ArrowButtonsContainer: FC<Partial<RedBreakpointsProps> & Props> = ({
  redBreakpoints,
  next,
  prev,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleHeight = () => {
      if (ref.current) {
        ref.current.style.height = `${
          document.documentElement.clientHeight -
          ref.current.parentElement!.offsetTop -
          ref.current.parentElement!.offsetHeight
        }px`;
      }
    };
    if (document.readyState !== "loading") handleHeight();
    else window.addEventListener("load", handleHeight);
    window.addEventListener("resize", handleHeight);
    window.addEventListener("orientationchange", handleHeight);
    return () => {
      window.removeEventListener("load", handleHeight);
      window.removeEventListener("resize", handleHeight);
      window.removeEventListener("orientationchange", handleHeight);
    };
  }, []);
  return (
    <div
      css={`
        position: absolute;
        ${redBreakpoints
          ? responsiveButtonColor(redBreakpoints)
          : "color: var(--primary);"}
        top: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        right: 0;
        min-width: calc(
          (100vw - var(--containerGutter-l) * 2 + var(--gridSpacing-l)) / 12 -
            var(--gridSpacing-l)
        );
      `}
      ref={ref}
    >
      <IconButton color="inherit" onClick={prev}>
        <ArrowRight />
      </IconButton>
      <IconButton color="inherit" onClick={next}>
        <ArrowLeft />
      </IconButton>
    </div>
  );
};

export default ArrowButtonsContainer;
