import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  language: "en",
};

const language = createReducer(initialState, (builder) => {});

export default language;
