import styled from "styled-components/macro";
import { GridContentAlignment } from "@material-ui/core";

type Props = { alignSelf?: GridContentAlignment };

const CardContent = styled.div<Props>`
  align-self: ${({ alignSelf = "flex-start" }) => alignSelf};
  width: 100%;
  h3 {
    width: 75%;
  }
`;

export default CardContent;
