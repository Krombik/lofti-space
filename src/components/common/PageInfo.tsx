import React, { FC } from "react";
import Button from "components/styled/Button";
import "styled-components/macro";
import makeResponsive from "utils/makeResponsive";
import { css } from "styled-components/macro";

type Props = { button?: JSX.Element };

const responsiveButtonMargin = makeResponsive(
  (value: number, { theme }) => css`
    margin-top: ${theme.spacing(value)}px;
  `
)({ xs: 5, md: 16 });

const responsiveHeaderMargin = makeResponsive(
  (value: number, { theme }) => css`
    margin-bottom: ${theme.spacing(value)}px;
  `
)({ xs: 3, md: 8 });

const PageInfo: FC<Props> = ({ button, children }) => (
  <>
    <div
      css={`
        > *:last-child {
          margin-bottom: 0;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          ${responsiveHeaderMargin}
        }
        + ${Button} {
          ${responsiveButtonMargin}
        }
      `}
    >
      {children}
    </div>
    {button}
  </>
);

export default PageInfo;
