import { SET_SCREEN_NUMBER, SET_MENU_IS_OPEN, SET_LANG } from '../constants'

export const setScreenNumber = screenNumber => (
  {
    type: SET_SCREEN_NUMBER,
    payLoad: screenNumber,
  }
)

export const setMenu = isMenuOpen => (
  {
    type: SET_MENU_IS_OPEN,
    payLoad: isMenuOpen,
  }
)

export const setLang = lang => (
  {
    type: SET_LANG,
    payLoad: lang,
  }
)
