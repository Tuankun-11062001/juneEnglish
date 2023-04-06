import { createSlice } from "@reduxjs/toolkit";
import { data_music } from "../common/data_music";
const initSettingSlice = {
  darkTheme: false,
  theme: "/src/assets/theme/hinh1.jfif",
  indexTheme: 1,
  font: {
    slider: 0,
    size: 1,
    fontFamily: "Arial",
    headingColor: "#ffffff",
    paragraphColor: "#ffffff",
  },
  music: {
    isPlay: false,
    name: "Hallelujah",
    category: "hillsong",
    img: "https://previews.123rf.com/images/solomnikov/solomnikov1510/solomnikov151000735/46945081-hallelujah-and-raised-hands.jpg",
    music: data_music[0].music,
  },
};

const settingSlice = createSlice({
  name: "setting",
  initialState: initSettingSlice,
  reducers: {
    changeMode: (state, action) => {
      return (state = action.payload);
    },
    updateApp: (state, action) => {
      return (state = action.payload);
    },
  },
});

const { reducer, actions } = settingSlice;
export const { updateApp, changeMode } = actions;
export default reducer;
