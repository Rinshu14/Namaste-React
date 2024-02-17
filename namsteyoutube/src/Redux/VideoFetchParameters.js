import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const VideoFetchParametersSlice = createSlice({
  name: "VideoFetchParametersSlice",
  initialState: {
    parameters: {
      serachKey: "",
      videoCategory: "All",
      flag: "V",
    },
  },
  reducers: {
    setSearchKey: (state, action) => {
      state.parameters = {
        serachKey: action.payload,
        videoCategory: state.parameters.videoCategory,
        flag: "S",
      };
    },
    setVideoCategory: (state, action) => {
      state.parameters = {
        serachKey: state.parameters.serachKey,
        videoCategory: action.payload,
        flag: "V",
      };
    },
  },
});

export const { setSearchKey, setVideoCategory } =
  VideoFetchParametersSlice.actions;
export default VideoFetchParametersSlice.reducer;
