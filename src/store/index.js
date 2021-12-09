import { configureStore } from "@reduxjs/toolkit";
import post from "./post/postSlice";

export const store = configureStore({
  reducer: {
    post,
  },
});
