import { createSlice } from "@reduxjs/toolkit";
export const modeSlice = createSlice({
  name: "modeSlice",
  initialState: {
    isDark: "",
    showIcon: true,
  },
  reducers: {
    changeMode: (state, action) => {
      localStorage.setItem("changeMode2", JSON.stringify(!state.isDark));
      state.isDark = !state.isDark;
      state.showIcon = !state.showIcon;
    },
  },
});

export const { changeMode } = modeSlice.actions;
export default modeSlice.reducer;
