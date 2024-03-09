import React, { useEffect } from "react";
import { api_options } from "../Utils/Constants";
import {
  addAction,
  addComedy,
  addHorror,
  addRomance,
} from "../Redux/MovieSlice";
import { useDispatch } from "react-redux";

const useFetchMoviesByGenre = (genere, genereId) => {
  

  const dispatch = useDispatch();
  useEffect(() => {
    getMovieKey();
  }, []);

  let getMovieKey = async () => {

    let res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US|with_original_language=hi&page=1&sort_by=popularity.desc&with_genres=${genereId}`,
      api_options
    );

    let data = await res.json();

    switch (genere) {
      case "Action":
        dispatch(addAction(data.results));
        break;

      case "Horror":
        dispatch(addHorror(data.results));
        break;

      case "Comedy":
        dispatch(addComedy(data.results));
        break;

      case "Romance":
        dispatch(addRomance(data.results));
        break;

    }

  };
};

export default useFetchMoviesByGenre;
