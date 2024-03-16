import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";
import useMovieTrailer from "../CustomHooks/useMovieTrailer";

const MainContainer = () => {
  const movies = useSelector((state) => state.movie.now_playing);


  if (!movies) return;

 

  return (
    <div className="">
     <VideoTitle  />
      <VideoBackground />
    </div>
  );
};

export default MainContainer;
