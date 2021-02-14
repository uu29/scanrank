import { takeEvery } from "redux-saga/effects";

import API from "../../../apis/modules/dashboard";
import { createAsyncSaga } from "../../lib";
import { fetch } from "./reducer";

const asyncFetchSaga = createAsyncSaga(fetch, API.fetchDashboard);

export default [takeEvery(fetch.request, asyncFetchSaga)];
