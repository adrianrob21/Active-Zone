import { createReducer } from "@reduxjs/toolkit";

const prefix = "application/";

export const TYPES = {
  REQUEST_FAIL: `${prefix}REQUEST_FAIL`,
};

const initialState = {};

const application = createReducer(initialState, (builder) => {});

export default application;
