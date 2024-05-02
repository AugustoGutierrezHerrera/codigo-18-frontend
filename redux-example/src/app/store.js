import { configureStore } from "@reduxjs/toolkit";
import { couterSliceReducer } from "./slices/counterSlice";

export const globalStore = configureStore({
  reducer: {
    counter: couterSliceReducer,
  },
});
