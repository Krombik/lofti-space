import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components/macro";

const ArrowButton = styled(IconButton)`
  border-radius: 0px;
  padding: 0;
  height: 100%;
  width: 50%;
  .MuiTouchRipple-root {
    overflow: initial;
    span {
      position: absolute;
      top: 0;
      left: -150%;
      top: -150%;
      height: 400%;
      width: 400%;
    }
  }
`;

export default ArrowButton;
