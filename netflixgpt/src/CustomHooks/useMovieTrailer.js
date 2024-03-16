import React, { useEffect } from "react";
import { api_options } from "../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo, addDisplayMovieIndex } from "../Redux/MovieSlice";

const useMovieTrailer = () => {
  const dispatch = useDispatch();
  const now_playing = useSelector((state) => state.movie.now_playing);

  useEffect(() => {
    if (!now_playing) return;
    getMovieKey(getmovieId());
  }, [now_playing]);

  let getMovieKey = async ({ movieId, index }) => {

    let res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      api_options
    );

    let data = await res.json();

    let filteredData = data.results.filter((item) => {
      return item.type == "Trailer";
    });

    let trailerVideo = filteredData.length == 0 ? data[0] : filteredData[0];

    if (!trailerVideo) getMovieKey(getmovieId());
    if (trailerVideo) {
      dispatch(addTrailerVideo(trailerVideo));
      dispatch(addDisplayMovieIndex(index));
    }
  };

  let getmovieId = () => {
    let index = Math.floor(Math.random() * 20);
    return { movieId: now_playing[index].id, index };
  };
};

export default useMovieTrailer;
