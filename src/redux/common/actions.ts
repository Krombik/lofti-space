import { ThunkResult } from "types";
import { ActionTypes } from "./type";

export const setLang = (lang: string): ThunkResult => (dispatch) => {
  dispatch({
    type: ActionTypes.SET_LANG,
    payload: lang,
  });
};

export const setMenu = (open: boolean): ThunkResult => (dispatch) => {
  dispatch({
    type: ActionTypes.SET_MENU,
    payload: open,
  });
};
