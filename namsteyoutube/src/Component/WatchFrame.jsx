import React from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";


const WatchFrame = () => {
  const [searchParams, setSearchParams] = useSearchParams();

 return (
    <div className="">
      <iframe
        width="713"
        height="401"
        src={
          "https://www.youtube.com/embed/" +
          searchParams.get("v3") +
          "?list=RDR-vnALzyUdg"
        }
        title="Sach Keh Raha Hai Deewana | Mayank Maurya | Rehna Hai Tere Dil Mein | Maadhyam I TBS Music I RHTDM"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="rounded-lg"
      ></iframe>
    </div>
  );
};

export default WatchFrame;
