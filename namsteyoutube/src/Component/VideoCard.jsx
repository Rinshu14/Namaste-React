import React from "react";
import { likeCount, calculateTimeDiff } from "../Utils/CommonMethods";

const VideoCard = ({ VideoDetails }) => {
  const { title, channelTitle, publishedAt } = VideoDetails.snippet;
  const thumbnail = VideoDetails.snippet.thumbnails.medium.url;
  const viewCount = VideoDetails.statistics?.viewCount;

  return (
    <div className="bg-white inline-block rounded-lg w-[15.5rem] items-center p-2 ml-6 mt-4 drop-shadow-lg text-slate-800">
      <img src={thumbnail} className="rounded-lg w-60"></img>
      <div>
        <p className="w-60 h-6 overflow-hidden text-base ">{title}</p>
        <p className="text-sm">{channelTitle}</p>
        <span className="text-sm">{likeCount(viewCount)} views</span>
        <span className="mx-4 text-sm">
          {calculateTimeDiff(publishedAt) + " ago"}
        </span>
      </div>
    </div>
  );
};

export default VideoCard;
