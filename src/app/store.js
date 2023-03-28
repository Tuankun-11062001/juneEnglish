import { configureStore } from "@reduxjs/toolkit";
import tagReducer from "../slices/tagSlice";

const rootReducer = {
  tags: tagReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
