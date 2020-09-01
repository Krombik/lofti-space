import Container from "components/styled/Container";
import styled from "styled-components/macro";

const CONTAINER_BREAKPOINTS = { md: { t: 8, l: 4 }, xs: { t: 4, l: 2 } };

const CarouselCard = styled(Container).attrs(() => ({
  gutterBreakpoints: CONTAINER_BREAKPOINTS,
}))`
  position: relative;
  display: flex;
`;

export default CarouselCard;
