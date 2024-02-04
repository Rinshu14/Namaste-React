import { configureStore } from "@reduxjs/toolkit";
import HamburgerSlice from "./HamburgerSlice";
import suggestionSlice from "./SuggestionSlice";
import SuggestionResultCacheSlice from "./SuggestionResultCacheSlice";
import LiveChatSlice from "./LiveChatSlice";

const appStore = configureStore({
  reducer: {
    Hamburger: HamburgerSlice,
    SuggestionSlice: suggestionSlice,
    SuggestionResultCache: SuggestionResultCacheSlice,
    LiveChat:LiveChatSlice,
  },
});

export default appStore;
