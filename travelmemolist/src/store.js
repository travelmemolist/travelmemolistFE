import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./redux/sagas/index";
import dayActivityReducer from "./redux/slices/dayActivity.slice";
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    dayActivity: dayActivityReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

export { store };
