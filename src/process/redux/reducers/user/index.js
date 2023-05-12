import { createReducer, createAction } from "@reduxjs/toolkit";

import { store } from "Redux/store";

const prefix = "user/";

export const TYPES = {
  CREATE_USER: `${prefix}CREATE_USER`,
  CREATE_USER_SUCCESS: `${prefix}CREATE_USER_SUCCESS`,
  CREATE_USER_FAIL: `${prefix}CREATE_USER_FAIL`,
};

const initialState = {};

const user = createReducer(initialState, () => {});

export const createUser = (email, password) =>
  store.dispatch({ type: TYPES.CREATE_USER, payload: { email, password } });

export default user;
