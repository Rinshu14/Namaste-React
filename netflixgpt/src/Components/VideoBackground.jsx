import React from "react";
import useMovieTrailer from "../CustomHooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
 
  // useMovieTrailer(movieId);
 useMovieTrailer()
  const trailerVideo = useSelector((state) => {
    return state.movie.DisplayMovie.trailerVideo;
  });
  

  if (!trailerVideo) return;

  
  return (
    // <div className=" ">
    //   <iframe 
    //     className="w-screen aspect-video"
    //     src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1&controls=0&rel=0&version=3&showinfo=0&modestbranding=1&loop=1&playlist=${trailerVideo?.key}`}
    //    // title="YouTube video player"
     
    //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //   ></iframe>
    // </div>
    <div className="sm:pt-0 pt-16">
    <iframe
      className="w-full aspect-video  "
      src={
        "https://www.youtube.com/embed/" +
        trailerVideo?.key +
        "?&autoplay=1&controls=0&&showinfo=0&mute=1&loop=1&playlist=" +
        trailerVideo?.key
      }
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  </div>
  );
};

export default VideoBackground;
