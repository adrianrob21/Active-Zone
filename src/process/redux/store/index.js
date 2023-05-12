import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";

import rootSaga from "../../saga";
import apiMiddleware from "../../apiMiddleware";

import { application } from "Reducers";

const persistConfig = {
  key: "activez-zone",
  storage,
};

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers(
  {
    application,
  },
  applyMiddleware(thunk)
);

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [sagaMiddleware, apiMiddleware],
});

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
