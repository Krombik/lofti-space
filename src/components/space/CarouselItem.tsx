import React, { FC } from "react";
import "styled-components/macro";
import { SpaceType, ThemeProps } from "types";
import Img from "components/common/Img";
import CardDivider from "components/carousel/CardDivider";
import { rgba } from "polished";
import MuiLink from "@material-ui/core/Link";
import { Link } from "react-router-dom";
import CarouselCard from "components/carousel/CarouselCard";
import CardContent from "components/carousel/CardContent";
import indexToTwoDigit from "utils/indexToTwoDigit";
import { css } from "styled-components/macro";
import Typography from "@material-ui/core/Typography";

type Props = { index: number };

const activeMixin = css`
  background: ${({ theme }: ThemeProps) =>
    rgba(theme.palette.primary.main, 0.8)};
  ${CardContent} {
    opacity: 1;
  }
`;

const CarouselItem: FC<SpaceType & Props> = ({ image, title, slug, index }) => (
  <CarouselCard
    css={`
      background: rgba(0, 0, 0, 0.000001);
      transition: ${({ theme }: ThemeProps) =>
        theme.transitions.create("background")};
      ${CardContent} {
        transition: ${({ theme }: ThemeProps) =>
          theme.transitions.create("opacity")};
        opacity: 0;
      }
      @media (min-width: ${({ theme }: ThemeProps) =>
          theme.breakpoints.values.sm}px) {
        &:hover {
          ${activeMixin}
        }
      }
      .slick-current & {
        ${activeMixin}
      }
      color: var(--white);
      font-weight: bold;
      text-transform: uppercase;
    `}
  >
    <Img src={image} alt={title} background />
    <CardContent alignSelf="flex-end">
      <div
        css={`
          position: absolute;
          top: calc(var(--containerGutter-t) / 2);
          right: var(--containerGutter-l);
          line-height: 1;
          font-size: var(--h3);
        `}
      >
        {indexToTwoDigit(index)}
      </div>
      <Typography variant="h3">{title}</Typography>
      <CardDivider />
      <MuiLink
        color="inherit"
        underline="none"
        variant="button"
        component={Link}
        to={slug}
      >
        Перейти {">"}
      </MuiLink>
    </CardContent>
  </CarouselCard>
);

export default CarouselItem;
