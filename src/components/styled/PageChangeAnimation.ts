import styled from "styled-components/macro";
import { ThemeProps } from "types";
import { PAGE_TRANSITION_DURATION } from "utils/constant";

type PageChangeAnimationProps = { isMore: boolean };

const PageChangeAnimation = styled.div<PageChangeAnimationProps>`
  height: 100%;
  .enter,
  .exit {
    position: fixed;
    top: 0;
    left: 0;
  }
  .enter-active,
  .exit {
    transition: ${({ theme }: ThemeProps) =>
      theme.transitions.create("transform", {
        duration: PAGE_TRANSITION_DURATION,
      })};
  }
  .enter {
    transform: translateY(${({ isMore }) => `${isMore ? "-" : ""}100%`});
    &-active {
      transform: translateY(0);
    }
  }
  .exit {
    transform: translateY(${({ isMore }) => `${isMore ? "" : "-"}100%`});
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100vw;
      background: rgba(0, 0, 0, 0.3);
      opacity: 0;
      transition: ${({ theme }: ThemeProps) =>
        theme.transitions.create("opacity", {
          duration: PAGE_TRANSITION_DURATION / 1.5,
        })};
    }
    &-active {
      &::after {
        opacity: 1;
      }
    }
  }
`;

export default PageChangeAnimation;
