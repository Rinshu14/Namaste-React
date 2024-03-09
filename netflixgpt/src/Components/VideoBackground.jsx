import React from "react";
import useMovieTrailer from "../CustomHooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
 
  useMovieTrailer(movieId);

  const trailerVideo = useSelector((state) => {
    return state.movie.trailerVideo;
  });

  if (!trailerVideo) return;

  // return (
  //   <div className="w-screen">
     
  //     <iframe className=" w-screen aspect-video"
  //       // width="560"
  //       // height="315"
  //       src={`https://www.youtube.com/embed/${trailerVideo?.key}`}
  //       title="YouTube video player"
  //       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  //     ></iframe>
  //   </div>
  // );
  // ?&autoplay=1&mute=1
  return (
    <div className=" ">
      <iframe 
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1&controls=1&enablejsapi=1&rel=0&version=3`}
       // title="YouTube video player"
     
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
