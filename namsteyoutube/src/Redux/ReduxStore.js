import { configureStore } from "@reduxjs/toolkit";
import HamburgerSlice from "./HamburgerSlice";
import suggestionSlice from "./SuggestionSlice";
import SuggestionResultCacheSlice from "./SuggestionResultCacheSlice";
import LiveChatSlice from "./LiveChatSlice";
import VideoSlice from "./VideoSlice";
import VideoFetchParametersSlice from "./VideoFetchParameters";
import ScreenSizeSlice from "./ScreenSizeSlice";

const appStore = configureStore({
  reducer: {
    Hamburger: HamburgerSlice,
    SuggestionSlice: suggestionSlice,
    SuggestionResultCache: SuggestionResultCacheSlice,
    LiveChat:LiveChatSlice,
    Video:VideoSlice,
    VideoFetchParameters:VideoFetchParametersSlice,
    ScreenSize:ScreenSizeSlice
  },
});

export default appStore;
