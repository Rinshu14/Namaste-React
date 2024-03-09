import React, { useEffect } from "react";
import { api_options } from "../Utils/Constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../Redux/MovieSlice";

const useMovieTrailer = (movieId) => {

  const dispatch = useDispatch();

  useEffect(() => {
    getMovieKey();
  }, []);

  let getMovieKey = async () => {
    let res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      api_options
    );

    let data = await res.json();

    
    let filteredData = data.results.filter((item) => {
      return item.type == "Trailer";
    });

    let trailerVideo = filteredData.length == 0 ? data[0] : filteredData[0];

    dispatch(addTrailerVideo(trailerVideo));
  };
};

export default useMovieTrailer;
