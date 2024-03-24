import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const MovieList = ({ title,movieList }) => {


  // const isSearch  = useSelector((state)=> state.GPTSlice.showSearchGPT)
  if (title == "now_playing") title = "Now Playing";
  if (title == "popular") title = "Popular";
  if (title == "top_rated") title = "Top Rated";

  if (!movieList) return;


  return (
    <div
      className={
        "relative z-10" + ((title == "Now Playing"  ) ? " lg:mt-[-14rem] " : "")
      }
    >
      <p className="mx-3 text-white text-xl font-semibold">{title}</p>
      <div className="flex overflow-x-scroll">
        <div className="flex p-2  my-2">
          {movieList.map((item) => {
            return <MovieCard key={item.id} movie={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
