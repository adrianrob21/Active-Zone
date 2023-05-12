import { put } from "redux-saga/effects";

import { TYPES as userTypes } from "Reducers/user";
import { TYPES as applicationTypes } from "Reducers/application";

import Api from "Api";

export const createUser = function* ({ payload }) {
  const { email, password } = payload;

  yield put({
    type: Api.API_CALL,
    actions: {
      success: { type: userTypes.CREATE_USER_SUCCESS },
      fail: { type: applicationTypes.REQUEST_FAIL },
    },
    promise: Api.createAccount(email, password),
  });
};

export const createUserSuccess = function* ({ payload }) {
  yield;
};
