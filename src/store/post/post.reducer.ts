import { createSlice } from "@reduxjs/toolkit";

type PostState = {};

type SliceState = {
  posts: PostState[];
};
const INITIAL_STATE: SliceState = {
  posts: [],
};
export const postSlice = createSlice({
  name: "posts",
  initialState: INITIAL_STATE,
  reducers: {
    addPost(state, action) {
      state.posts = [...state.posts, action.payload];
    },
  },
});

export const { addPost } = postSlice.actions;
export const postReducer = postSlice.reducers;
