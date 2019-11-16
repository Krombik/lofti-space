import { SET_SCREEN_NUMBER, SET_MENU_IS_OPEN, SET_LANG } from '../constants'

const defaultState = {
  screenNumber: 0,
  isMenuOpen: false,
  lang: 0,
}

export const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_SCREEN_NUMBER:
      return { ...state, screenNumber: action.payLoad }
    case SET_MENU_IS_OPEN:
      return { ...state, isMenuOpen: action.payLoad }
    case SET_LANG:
      return { ...state, lang: action.payLoad }
    default:
      return state
  }
}
