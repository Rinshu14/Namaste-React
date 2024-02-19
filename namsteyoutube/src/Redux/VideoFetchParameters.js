import { createSlice } from "@reduxjs/toolkit";


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
      console.log("from set search key=="+ action.payload);
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
