import React, { FC, useState, useCallback, MouseEvent } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import { createSelector } from "reselect";
import { useSelector, useDispatch } from "react-redux";
import { State, ThunkDispatcher } from "types";
import { setLang } from "redux/common/actions";
import Menu from "@material-ui/core/Menu";
import "styled-components/macro";
import Button from "@material-ui/core/Button";

const selectData = createSelector(
  (state: State) => state.common.lang,
  (lang) => ({ lang })
);

const LangSelect: FC = () => {
  const langs = ["ru", "ua", "en"];
  const dispatch = useDispatch<ThunkDispatcher>();
  const { lang } = useSelector(selectData);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleLang = useCallback((lang: string) => {
    dispatch(setLang(lang));
    setAnchorEl(null);
  }, []);
  const handleClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  }, []);
  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);
  return (
    <>
      <Button onClick={handleClick} disableRipple>
        {lang}
      </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={!!anchorEl}
        onClose={handleClose}
      >
        {langs.map((item) => (
          <MenuItem
            key={item}
            selected={item === lang}
            onClick={() => handleLang(item)}
          >
            {item.toLocaleUpperCase()}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LangSelect;
