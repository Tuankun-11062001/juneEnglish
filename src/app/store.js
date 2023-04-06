import { configureStore } from "@reduxjs/toolkit";
import tagReducer from "../reduxSlice/tagSlice";
import settingReducer from "../reduxSlice/settingSlices";

const rootReducer = {
  tags: tagReducer,
  settings: settingReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
