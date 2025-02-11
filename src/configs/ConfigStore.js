import { configureStore } from "@reduxjs/toolkit";
import MessageSlice from "../slices/MessageSlice";

const store = configureStore({
  reducer: {
    message: MessageSlice,
  },
});

export default store;
