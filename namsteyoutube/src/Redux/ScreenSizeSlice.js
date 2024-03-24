import { createSlice } from "@reduxjs/toolkit";

const ScreenSizeslice = createSlice({
  name: "ScreenSizeslice",
  initialState: {
    screenSize: [],
  },
  reducers: {
    addscreenSize: (state, action) => {
      state.screenSize = action.payload;
    },
  },
});
export const { addscreenSize } = ScreenSizeslice.actions;
export default ScreenSizeslice.reducer;
