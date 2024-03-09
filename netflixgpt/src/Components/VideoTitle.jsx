import React from "react";
import { CiPlay1 } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({ mainMovie }) => {
  const { title, overview } = mainMovie;
  // w-[30rem] m-56 mx-24  
  return (
    <div className="absolute w-screen aspect-video p-[10%] py-[15%] text-white bg-gradient-to-tr from-black">
      <p className="text-4xl font-semibold">{title}</p>
      <p className="w-[35rem] ">{overview}</p>
      <div className="flex">
        <button className="w-24 h-9 bg-red-700 rounded-xl m-3 flex justify-center items-center bg-opacity-90 hover:bg-opacity-50">
          <CiPlay1/>
          Play
        </button>
        <button className=" w-32 h-9 bg-red-700 rounded-xl m-3  flex justify-center items-center bg-opacity-60">
          <IoIosInformationCircleOutline />
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
