import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
  name: "GPTSlice",
  initialState: { showSearchGPT: false, movieNames: null, movieResults: null },
  reducers: {
    toggleShowSearchGPT: (state, action) => {
      state.showSearchGPT = !state.showSearchGPT;
      if (!state.showSearchGPT) {
        state.movieNames = null;
        state.movieResults = null;
      }
    },

    addMovieNames: (state,action) => {
        state.movieNames=action.payload.movieNames;
        state.movieResults=action.payload.movieResults;
    }
  },
});

export const { toggleShowSearchGPT ,addMovieNames} = GPTSlice.actions;
export default GPTSlice.reducer;
