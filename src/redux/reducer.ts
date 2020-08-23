import { combineReducers } from "redux";
import { persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
import commonReducer from "./common/reducer";

const commonConfig: PersistConfig<any> = {
  key: "lang",
  storage: storage,
  whitelist: ["lang"],
};

export const combinedReducer = combineReducers({
  common: persistReducer(commonConfig, commonReducer),
});
