import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slice/counter-slice";
import { postReducer } from "./slice/post-slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    post: postReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
