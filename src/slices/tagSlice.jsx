import { createSlice } from "@reduxjs/toolkit";

const initTag = {
  loading: false,
  data: [],
};

const tagSlice = createSlice({
  name: "tag",
  initialState: initTag,
  reducers: {
    addOne: (state, actions) => {
      state.data.push(actions.payload);
    },
  },
});

const { reducer, actions } = tagSlice;
export const { addOne } = actions;
export default reducer;
