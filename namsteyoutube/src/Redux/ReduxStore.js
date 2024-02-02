import { configureStore } from "@reduxjs/toolkit";
import HamburgerSlice from "./HamburgerSlice";
import suggestionSlice from "./SuggestionSlice";
import SuggestionResultCacheSlice from "./SuggestionResultCacheSlice";

const appStore = configureStore({
  reducer: {
    Hamburger: HamburgerSlice,
    SuggestionSlice: suggestionSlice,
    SuggestionResultCache: SuggestionResultCacheSlice,
  },
});

export default appStore;
