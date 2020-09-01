import React, { FC } from "react";
import Typography from "@material-ui/core/Typography";
import "styled-components/macro";
import { ThemeProps, TariffType } from "types";
import CardDivider from "components/carousel/CardDivider";
import { rgba } from "polished";
import MuiLink from "@material-ui/core/Link";
import { Link } from "react-router-dom";
import CarouselCard from "components/carousel/CarouselCard";
import CardContent from "components/carousel/CardContent";
import { css } from "styled-components/macro";

const activeMixin = css`
  background: var(--primary);
  color: var(--white);
  a {
    color: var(--white);
  }
`;

const CarouselItem: FC<TariffType> = ({ title, slug, price }) => (
  <CarouselCard
    css={`
      background: var(--white);
      transition: ${({ theme }: ThemeProps) =>
        theme.transitions.create(["background", "color"])};
      color: var(--black);
      a {
        transition: ${({ theme }: ThemeProps) =>
          theme.transitions.create("color")};
        color: var(--primary);
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
      font-weight: bold;
    `}
  >
    <CardContent alignSelf="center">
      <Typography variant="h3">{title}</Typography>
      <CardDivider />
      <div
        css={`
          font-size: var(--h3);
        `}
      >
        <span
          css={`
            font-size: var(--body1);
          `}
        >
          от
        </span>
        {` ${price} `}₴
      </div>
      <MuiLink
        css={`
          position: absolute;
          bottom: var(--containerGutter-t);
          left: var(--containerGutter-l);
        `}
        color="inherit"
        variant="button"
        underline="none"
        component={Link}
        to={slug}
      >
        Подробнее
      </MuiLink>
    </CardContent>
  </CarouselCard>
);

export default CarouselItem;
