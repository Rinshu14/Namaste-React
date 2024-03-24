import React from 'react'
import {likeCount,calculateTimeDiff}  from "../Utils/CommonMethods"

const RealtedVideoCard = ({VideoDetails}) => {
  const { title, channelTitle, publishedAt } = VideoDetails.snippet;
  const thumbnail = VideoDetails.snippet.thumbnails.medium.url;
  const viewCount = VideoDetails.statistics?.viewCount;

  return (
    <div className="bg-white flex t rounded-lg h-32 w-[24.5rem] sm:w-[40rem] md:w-[55rem] lg:w-[40rem] xl:w-[45rem] items-center p-2  mt-4 drop-shadow-lg text-slate-800">
      <img src={thumbnail} className="rounded-lg w-[30%] h-[80%] "></img>
      <div className="ml-3 w-[68%]">
        <p className="  text-sm">{(title.length>=50) ?`${title.substring(0,75)}...`:title}</p>
        <p className="text-sm  break-words">{channelTitle}</p>
        <span className="text-sm">{likeCount(viewCount)} views</span>
        <span className="mx-4 text-sm">
          {calculateTimeDiff(publishedAt) + " ago"}
        </span>
      </div>
    </div>
  );
}

export default RealtedVideoCard