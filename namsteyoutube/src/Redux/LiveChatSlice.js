import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "../Utils/Constants";

const LiveChatslice = createSlice({
  name: "LiveChatslice",
  initialState: {
    messages: [],
  },
  reducers: {
    addChatMsg: (state, action) => {
      if (state.messages.length > LIVE_CHAT_COUNT) {
        state.messages.shift();
      }

      state.messages.push(action.payload);
    },
  },
});
export const { addChatMsg } = LiveChatslice.actions;
export default LiveChatslice.reducer;
