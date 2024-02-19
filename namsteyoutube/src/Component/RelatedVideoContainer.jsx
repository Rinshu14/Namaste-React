import React from "react";
import { video_by_categoryId, youTube_API_Key,shimmerUICount } from "../Utils/Constants";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import VideoCardShimmer from "./VideoCardShimmer";

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
  }, [videoData]);

  if (isLoading) {
    return (
      <div className=" flex flex-col">
        {Array(shimmerUICount)
          .fill("")
          .map(() => {
            return <VideoCardShimmer />;
          })}
      </div>
    );
  }
  return (
    <div
      className={"drop-shadow-lg flex flex-col" + (suggestBar ? " -z-10" : "")}
    >
      {videoList.map((item) => {
        return (
          <Link key={item.id} to={"/watch?v3=" + item.id.videoId}>
            <VideoCard VideoDetails={item} />
          </Link>
        );
      })}
    </div>
  );
};

export default RelatedVideoContainer;
