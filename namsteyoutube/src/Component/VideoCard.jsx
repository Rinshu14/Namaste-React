import React from "react";
import { likeCount, calculateTimeDiff } from "../Utils/CommonMethods";
import { useSelector } from "react-redux";

const VideoCard = ({ VideoDetails }) => {
  const { title, channelTitle, publishedAt } = VideoDetails.snippet;
  const thumbnail = VideoDetails.snippet.thumbnails.medium.url;
  const viewCount = VideoDetails.statistics?.viewCount;
  
  const SideBar=useSelector((state)=>state.Hamburger.expandSideBar)
  
  const cardWidth=(SideBar)?"16rem":"14.5rem"
  // console.log("card width="+cardWidth)

  return (
    <div className={`bg-white inline-block rounded-lg w-[22rem] sm:w-[13rem] md:w-[16rem] lg:w-[${cardWidth}] xl:[17.5rem] items-center p-2 ml-6 mt-4 drop-shadow-lg text-slate-800`}>
      <img src={thumbnail} className="rounded-lg w-[95%] m-auto "></img>
      <div>
        <p className="w-[90%] h-6  text-base overflow-hidden">{title}</p>
        <p className="text-sm  break-words">{channelTitle}</p>
        <span className="text-sm">{likeCount(viewCount)} views</span>
        <span className="mx-4 text-sm">
          {calculateTimeDiff(publishedAt) + " ago"}
        </span>
      </div>
    </div>
  );
};

export default VideoCard;
