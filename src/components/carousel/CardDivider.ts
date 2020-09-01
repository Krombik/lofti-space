import styled, { css } from "styled-components/macro";
import makeResponsive from "utils/makeResponsive";

const responsiveMargin = makeResponsive(
  (value: [number, number], { theme }) => css`
    margin: ${theme.spacing(value[0], 0, value[1])};
  `
)({ xs: [2, 4], md: [4, 8] });

const CardDivider = styled.div`
  width: 100%;
  background: currentColor;
  height: 3px;
  ${responsiveMargin}
`;

export default CardDivider;
