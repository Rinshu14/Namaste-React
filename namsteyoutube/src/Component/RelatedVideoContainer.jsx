import React from "react";
import { video_by_categoryId, youTube_API_Key } from "../Utils/Constants";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const RelatedVideoContainer = () => {
  const suggestBar = useSelector((state) => state.SuggestionSlice.show);
  const videoData = useSelector((state) => state.Video.VideoDetails);

  const categoryId = videoData?.items?.[0].snippet?.categoryId;

  const [videoList, setVideoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let fetchVideos = async () => {
    
    let res = await fetch(
      video_by_categoryId + categoryId + "&key=" + youTube_API_Key
    );
    let data = await res.json();

    setVideoList([...data?.items]);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchVideos();
  }, []);

  if (isLoading) return <></>;
  return (
    <div
      className={"drop-shadow-lg flex flex-col" + (suggestBar ? " -z-10" : "")}
    >
      {videoList.map((item) => {
        return (
          <Link key={item.id} to={"/watch?v3=" + item.id}>
            <VideoCard VideoDetails={item} />
          </Link>
        );
      })}
    </div>
  );
};

export default RelatedVideoContainer;
