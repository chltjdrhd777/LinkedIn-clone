import { configureStore } from "@reduxjs/toolkit";
import { mainReducer } from "./mainReducer";
import ReduxThunk from "redux-thunk";

const middleware = [ReduxThunk];

export default configureStore({
  reducer: mainReducer,
  middleware,
});

/* export const createStore = () => {
  const store = configureStore({
    reducer: mainReducer,
    middleware,
  });

  return store;
};
 */
