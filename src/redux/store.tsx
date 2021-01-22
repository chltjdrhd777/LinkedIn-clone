import { configureStore } from "@reduxjs/toolkit";
import { mainReducer } from "./mainReducer";
import ReduxThunk from "redux-thunk";

const middleware = [ReduxThunk];

export const createStore = () => {
  const store = configureStore({
    reducer: mainReducer,
    middleware,
  });

  return store;
};
