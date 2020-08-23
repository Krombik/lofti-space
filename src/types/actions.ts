import { CommonActions } from "redux/common/type";
import { RehydrateAction } from "redux-persist";

export type Actions = CommonActions | RehydrateAction;
