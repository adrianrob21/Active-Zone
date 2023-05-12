import { all, takeLatest } from "redux-saga/effects";

import { TYPES as userTypes } from "Reducers/user";
import { TYPES as applicationTypes } from "Reducers/application";

import { requestFail } from "./application";

import { createUser, createUserSuccess } from "./user";

export default function* rootSaga() {
  yield all([
    takeLatest(applicationTypes.REQUEST_FAIL, requestFail),

    takeLatest(userTypes.CREATE_USER, createUser),
    takeLatest(userTypes.CREATE_USER_SUCCESS, createUserSuccess),
  ]);
}
