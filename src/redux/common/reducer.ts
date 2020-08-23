import { ActionTypes, CommonActions } from "./type";

type State = {
  lang: string;
  menu: boolean;
};

const initialState: State = {
  lang: "ru",
  menu: false,
};

export default function reducer(
  state = initialState,
  action: CommonActions
): State {
  switch (action.type) {
    case ActionTypes.SET_LANG:
      return {
        ...state,
        lang: action.payload,
      };
    case ActionTypes.SET_MENU:
      return {
        ...state,
        menu: action.payload,
      };
    default:
      return state;
  }
}
