import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const MovieList = ({ title,movieList }) => {
  // const movieList = useSelector((state) => {
  //   return state.movie[title];
  // });

  const isSearch  = useSelector((state)=> state.GPTSlice.showSearchGPT)
  if (title == "now_playing") title = "Now Playing";
  if (title == "popular") title = "Popular";

  if (!movieList) return;


  return (
    <div
      className={
        "m-2 relative z-10" + ((title == "Now Playing"  ) ? " mt-[-20rem]" : "")
      }
    >
      <p className="mx-3 text-white">{title}</p>
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
