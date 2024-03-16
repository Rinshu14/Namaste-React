import React from "react";
import { CiPlay1 } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { useSelector } from "react-redux";

const VideoTitle = () => {
  // w-[30rem] m-56 mx-24  
  
  let index=useSelector((state)=> state.movie.DisplayMovie.movieIndex)
  
  let mainMovie= useSelector((state)=> state.movie.now_playing?.[index]);
  if(!index || !mainMovie) return 
  const { title, overview } = mainMovie;



  return (
    <div className="absolute w-screen aspect-video p-[2%] py-[60%]  sm:py-[45%] md:p-[4%] md:py-[15%] bg-gradient-to-tr from-black">
      <p className=" text-2xl md:text-4xl font-semibold text-white">{title}</p>
      <p className="hidden md:inline-block w-[33rem] text-white ">{overview}</p>
      <div className="flex">
        <button className="hidden w-24 h-9 bg-slate-200 rounded-xl m-3 md:flex md:justify-center md:items-center bg-opacity-90 hover:bg-opacity-50">
          <CiPlay1 className="text-xl font-bold"/>
          Play
        </button> 
        <button className=" hidden  w-32 h-9 bg-slate-200 rounded-xl m-3  md:flex md:justify-center md:items-center bg-opacity-60">
          <IoIosInformationCircleOutline className="text-xl font-bold" />
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
