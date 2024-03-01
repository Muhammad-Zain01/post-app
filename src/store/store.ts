import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { postReducer } from "./post/post.reducer";
import { appReducer } from "./post/app.reducer";

import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
const persistConfig = {
  key: "root",
  storage,
};
const reducer = combineReducers({
  posts: postReducer,
  app: appReducer,
});
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  // middleware: () => {},
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
