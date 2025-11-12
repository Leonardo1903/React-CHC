import { configureStore } from "@reduxjs/toolkit";
import { habitSlice } from "./habitSlice";

export default configureStore({
  reducer: {
    habits: habitSlice.reducer,
  },
});
