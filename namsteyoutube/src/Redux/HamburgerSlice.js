import { createSlice } from "@reduxjs/toolkit";

const hamburgerSlice = createSlice({
  name: "hamburgerSlice",
  initialState: { expandSideBar: true },
  reducers: {
    toggleSidebar: (state, action) => {
      state.expandSideBar = !state.expandSideBar;
    },
   closeSidebar: (state, action) => {
      state.expandSideBar = false;
    },
    openSidebar: (state, action) => {
      state.expandSideBar = true;
    },
  },
});

export const {toggleSidebar,closeSidebar,openSidebar} =hamburgerSlice.actions;

export default hamburgerSlice.reducer;
