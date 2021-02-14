import { HYDRATE } from "next-redux-wrapper";
import { combineReducers, AnyAction } from "redux";
import { combineSagas } from "../lib";

import dashboard from "./dashboard";
import { IDashboard } from "./dashboard/reducer";

export type State = {
  dashboard: IDashboard;
};

const rootReducer = (state: State | undefined, action: AnyAction): State => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        dashboard: dashboard.reducer,
      });
      return combinedReducer(state, action);
    }
  }
};

export default {
  rootReducer: rootReducer,
  rootSagas: combineSagas({ dashboard: dashboard.saga }),
};
