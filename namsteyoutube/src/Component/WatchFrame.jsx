import React from "react";
import { useSearchParams } from "react-router-dom";



const WatchFrame = () => {
  const [searchParams, setSearchParams] = useSearchParams();

 return (
    <div className="w-screen aspect-video sm:w-[32rem] lg:w-[40rem] lg:h-[37rem] xl:h-[30rem] xl:w-[45rem] mt-6 md:mt-9">
      <iframe
        // width="713"
        // height="401"
        className="w-screen aspect-video sm:w-[32rem] lg:w-[40rem] lg:h-[37rem] xl:h-[30rem] xl:w-[45rem]"
        src={
          "https://www.youtube.com/embed/" +
          searchParams.get("v3") +
          "?list=RDR-vnALzyUdg"
        }
        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
    
      ></iframe>
    </div>
  );
};

export default WatchFrame;
