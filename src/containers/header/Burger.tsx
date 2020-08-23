import React, { FC } from "react";
import IconButton from "@material-ui/core/IconButton";
import { useDispatch } from "react-redux";
import { ThunkDispatcher } from "types";
import { setMenu } from "redux/common/actions";
import CloseIcon from "icons/Close";
import BurgerIcon from "icons/Burger";

type Props = { menu: boolean };

const Burger: FC<Props> = ({ menu }) => {
  const dispatch = useDispatch<ThunkDispatcher>();
  const handleMenu = () => {
    dispatch(setMenu(!menu));
  };
  return (
    <IconButton onClick={handleMenu} color="inherit" disableRipple>
      {menu ? <CloseIcon /> : <BurgerIcon />}
    </IconButton>
  );
};

export default Burger;
