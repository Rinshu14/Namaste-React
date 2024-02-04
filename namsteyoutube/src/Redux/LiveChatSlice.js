import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "../Utils/Constants";

const LiveChatslice = createSlice({
  name: "LiveChatslice",
  initialState: {
    messages:[]
  },
  reducers: {
    addChatMsg: (state, action) => {
     console.log(state.messages.length);
    //  state.messages.splice(LIVE_CHAT_COUNT, 1)
      state.messages.push(action.payload);
    },
  },
});
export const {addChatMsg} =LiveChatslice.actions;
export default LiveChatslice.reducer;

