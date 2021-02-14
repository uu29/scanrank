import { combineReducers } from "redux";
import { combineSagas } from "../lib";

import dashboard from "./dashboard";

export default {
  rootReducer: combineReducers({ dashboard: dashboard.reducer }),
  rootSagas: combineSagas({ dashboard: dashboard.saga }),
};
