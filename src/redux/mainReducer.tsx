import user, { UserState } from "./userSlices";

export const mainReducer = {
  user: user.reducer,
};

export const selectUser = (state: { user: UserState }) => {
  return state.user;
};
