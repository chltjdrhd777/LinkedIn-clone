import user, { UserState } from "./userSlices";

export const mainReducer = {
  user: user.reducer,
};

export const selectUser = (everyState: { user: UserState }) => {
  return everyState.user;
};
