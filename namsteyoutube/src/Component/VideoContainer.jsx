import React, { useEffect, useState } from "react";
import { youTube_API } from "../Utils/Constants";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

const VideoContainer = () => {
  let [videoList, setVideoList] = useState([]);
  let [isloading, setIsLoading] = useState(true);

  const suggestBar = useSelector((state) => state.SuggestionSlice.show);
  // const expandSideBar = useSelector((store) => store.Hamburger.expandSideBar);

  let fetchVideos = async () => {
    let res = await fetch(youTube_API);
    let data = await res.json();
    setVideoList([...data.items]);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchVideos();
  }, []);
  if (isloading) {
    return <></>;
  }

  return (
    <div
      className={
        " relative  drop-shadow-lg bg-slate-50 flex flex-wrap" +
        (suggestBar ? " -z-10" : "")
      }
    >
      {videoList.map((item) => {
        return (
          <Link key={item.id} to={"/watch?v3=" + item.id}>
            {" "}
            <VideoCard VideoDetails={item} />{" "}
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
