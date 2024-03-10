import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./redux/sagas/index";
import dayActivityReducer from "./redux/slices/dayActivity.slice";
import memoryReducer from "./redux/slices/memory.slice";
import scheduleReducer from "./redux/slices/schedule.slice";
import authReducer from "./redux/slices/auth.slice";
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    auth: authReducer,
    dayActivity: dayActivityReducer,
    memory: memoryReducer,
    schedule: scheduleReducer,
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
