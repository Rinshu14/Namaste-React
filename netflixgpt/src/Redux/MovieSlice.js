import { createSlice } from "@reduxjs/toolkit";
import { now_playing,top_rated,popular,Comedy, Horror, Romance, Action ,Popular} from "../Utils/Constants";

const movieSlice = createSlice({
  name: "MovieSlice",
  initialState: {
    now_playing: null,
    DisplayMovie: {movieIndex:null,
    trailerVideo:null},
    top_rated: null,
    [Popular]: null,
    [Comedy]: null,
   [Horror]: null,
    [Romance]: null,
    [Action]: null,
   

  },
  reducers: {
    addnow_playing: (state, action) => {
      state.now_playing = action.payload;
    },
    removenow_playing: (state, action) => {
      state.now_playing= null;
    },
    addTrailerVideo: (state, action) => {
    
      state.DisplayMovie.trailerVideo = action.payload;
    },
    addDisplayMovieIndex:(state, action)=>{
      state.DisplayMovie.movieIndex = action.payload;
    },
    addtop_rated: (state, action) => {
      state.top_rated = action.payload;
    },
    addHorror: (state, action) => {
      state[Horror] = action.payload;
    },
    addRomance: (state, action) => {
      state[Romance] = action.payload;
    },
    addComedy: (state, action) => {
      state[Comedy] = action.payload;
    },
    addAction: (state, action) => {
   
      state[Action] = action.payload;
    },
  
    addPopular: (state, action) => {
    
      state[Popular] = action.payload;
    },
  },
});

export const { addnow_playing, removenow_playing, addTrailerVideo,addtop_rated,addPopular,addRomance,addHorror,addComedy,addAction ,addDisplayMovieIndex} = movieSlice.actions;
export default movieSlice.reducer;
