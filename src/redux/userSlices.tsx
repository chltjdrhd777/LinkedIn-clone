import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserInfo {
  displayName: string;
  photoURL: string;
  uid: string;
  email: string;
}

interface PostInfo {
  id: string;
  data: {
    name?: string;
    message?: string;
    description?: string;
    photoURL?: string;
    timestamp?: string;
  };
}

export interface UserState {
  userInfo?: UserInfo;
  postInfo?: PostInfo[];
}

const user = createSlice({
  name: "user",
  initialState: {
    userInfo: /* {
      photoURL:
        "https://hullandhull.com/wp-content/uploads/2020/06/smiley-10994882.jpg",
    } */ undefined,
    postInfo: [],
  } as UserState,
  reducers: {
    login: (state, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload;
    },
    logout: (state) => {
      state.userInfo = undefined;
    },

    petchPost: (state, action) => {
      state.postInfo = action.payload;
    },
  },
});

export default user;

export const { login, logout, petchPost } = user.actions;
