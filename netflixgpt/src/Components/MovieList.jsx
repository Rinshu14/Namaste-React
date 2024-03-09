import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const MovieList = ({ title }) => {
  const movieList = useSelector((state) => {
    return state.movie[title];
  });
  if (title == "top_rated") title = "Top Rated";
  if (title == "now_playing") title = "Now Playing";
  if (title == "popular") title = "Popular";

  if (!movieList) return;
  console.log( (title == "Top Rated" ? "mt-[-5rem]" : ""))
  return (
    <div
      className={
        "m-2 relative z-10" + (title == "Now Playing" ? " mt-[-20rem]" : "")
      }
    >
      <p className="mx-3">{title}</p>
      <div className="flex overflow-x-scroll">
        <div className="flex p-2  my-2">
          {movieList.map((item) => {
            return <MovieCard movie={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
