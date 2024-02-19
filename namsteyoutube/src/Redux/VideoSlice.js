import { createSlice } from "@reduxjs/toolkit";

const VideoSlice = createSlice({
  name: "VideoSlice",
  initialState: { VideoDetails: {} },
  reducers: {
    
    addVideoDetails: (state, action) => {
      console.log("in addVideoDeatils")
      state.VideoDetails = action.payload;
    },
  },
});
export const {addVideoDetails} =VideoSlice.actions
export default VideoSlice.reducer
