import styled from "styled-components/macro";
import MuiTypography from "@material-ui/core/Typography";
import { spacingFunc } from "./Container";

export const TYPOGRAPHY = {
  h1: {
    xs: { fontSize: "30px", margin: 3 },
    lg: { fontSize: "80px", margin: 8 },
    func: { margin: spacingFunc },
  },
  h2: {
    xs: { fontSize: "30px", margin: 3 },
    lg: { fontSize: "60px", margin: 8 },
    func: { margin: spacingFunc },
  },
  h3: {
    xs: { fontSize: "30px", margin: 3 },
    lg: { fontSize: "40px", margin: 8 },
    func: { margin: spacingFunc },
  },
  body1: {
    xs: { fontSize: "16px" },
    lg: { fontSize: "24px" },
    func: { margin: spacingFunc },
  },
  body2: {
    xs: { fontSize: "14px" },
    lg: { fontSize: "18px" },
    func: { margin: spacingFunc },
  },
};

const Typography = styled(MuiTypography)`
  ${({ variant }) => `
    font-size: var(--${variant}-fontSize);
    margin-bottom: var(--${variant}-margin);
  `}
`;

export default Typography;
