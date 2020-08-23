import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { combinedReducer } from "redux/reducer";
import { Actions } from "./actions";
import { Theme } from "@material-ui/core";
import { ThemeProps as GenericThemeProps } from "styled-components/macro";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";

export type BreakpointObj<T> = {
  [key in Breakpoint]?: T;
};

export type State = ReturnType<typeof combinedReducer>;

export type ThunkResult<R = void> = ThunkAction<R, State, unknown, Actions>;

export type ThunkDispatcher = ThunkDispatch<State, any, Actions>;

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
export type XOR<T, U> = T | U extends object
  ? (Without<T, U> & U) | (Without<U, T> & T)
  : T | U;

export type ThemeProps = GenericThemeProps<Theme>;

export type Img = { src: string; alt: string };
