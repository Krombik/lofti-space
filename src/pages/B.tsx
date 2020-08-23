import React, { FC, memo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import makeResponsiveVariables from "utils/makeResponsiveVariables";

const K = styled.div`
  ${makeResponsiveVariables({
    b: { xs: { kek: 12, bek: 25 } },
    d: {
      xs: { kek: { sek: ({ theme }) => theme.spacing(13), trek: 13 }, bek: 25 },
      lg: 3,
    },
    z: { lg: 5, func: (value, { theme }) => theme.spacing(value) },
    p: {
      lg: { i: [25, 25] },
      func: { i: (value, { theme }) => theme.spacing(value[0], value[1]) },
    },
  })}
`;

const B: FC = memo(() => {
  return (
    <Link to="/">
      <K />
      12354558-gfkghkgfhlklgk rtrrl lkrthlkj rltk hlthlk tlktrlklkj
      trlkjlkjrljkh
    </Link>
  );
});

export default B;
