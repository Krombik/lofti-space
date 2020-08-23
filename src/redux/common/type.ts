export enum ActionTypes {
  SET_LANG = "SET_LANG",
  SET_MENU = "SET_MENU",
}

type SetLang = {
  type: ActionTypes.SET_LANG;
  payload: string;
};

type SetMenu = {
  type: ActionTypes.SET_MENU;
  payload: boolean;
};

export type CommonActions = SetLang | SetMenu;
