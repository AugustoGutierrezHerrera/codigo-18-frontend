import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Augusto",
    lastName: "Gutierrez",
  },
});

export const userReducer = userSlice.reducer;
