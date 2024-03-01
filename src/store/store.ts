import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "./post/post.reducer";
import { appReducer } from "./post/app.reducer";

export const store = configureStore({
  reducer: {
    posts: postReducer,
    app: appReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
