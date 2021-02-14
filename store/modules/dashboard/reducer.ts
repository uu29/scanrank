import { IRequest, IResponse, IError } from "../../../apis/modules/dashboard";
import { createAsyncAction, createActionEntity, createCustomReducer } from "../../lib";

export interface IList {
  id: string;
}

export interface IDashboard {
  list: IList[];
  message: string;
}

const FETCH = createAsyncAction("dashboard/FETCH");
export const fetch = createActionEntity<IRequest, IResponse, IError>(FETCH);

const actions = { fetch };
const state = { list: [] as IList[], message: "" };

const reducer = createCustomReducer(state, actions)
  .handleAction(fetch.success, (state, action) => {
    return { ...state, dashboard: action.payload.data };
  })
  .handleAction(fetch.failure, (state, action) => {
    return { ...state, message: action.payload.message };
  });

export default reducer;
