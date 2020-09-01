import styled from "styled-components/macro";
import MuiTypography from "@material-ui/core/Typography";

export const TYPOGRAPHY = {
  h1: {
    xs: "30px",
    lg: "80px",
  },
  h2: {
    xs: "30px",
    lg: "60px",
  },
  h3: {
    xs: "30px",
    lg: "40px",
  },
  body1: {
    xs: "16px",
    lg: "24px",
  },
  body2: {
    xs: "14px",
    lg: "18px",
  },
};

const Typography = styled(MuiTypography)`
  ${({ variant }) => `
    font-size: var(--${variant});
  `}
`;

export default Typography;
