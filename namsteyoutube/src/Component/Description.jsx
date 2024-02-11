import React from "react";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { channel_details_api, youTube_API_Key } from "../Utils/Constants";
import { useEffect, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { likeCount } from "../Utils/CommonMethods";

const Description = () => {

  debugger
  
  const VideoData = useSelector((state) => state.Video.VideoDetails);
  const title = VideoData?.items?.[0]?.snippet?.title;
  const channelTitle = VideoData?.items?.[0].snippet.channelTitle;
  const channelId = VideoData?.items?.[0].snippet.channelId;
  const likes = VideoData?.items?.[0].statistics?.likeCount;
  const views = VideoData?.items?.[0].statistics?.viewCount;
  const description = VideoData?.items?.[0].snippet?.description;
  const [isLoading, setIsLoading] = useState(true);
  const [channelImage, setChannelImage] = useState("");

  const [isReadMore, setIsReadMore] = useState(true);

  const toogleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  useEffect(() => {
    getChannelDetails();
  }, []);

  let getChannelDetails = async () => {
    let res = await fetch(
      channel_details_api + channelId + "&key=" + youTube_API_Key
    );
    let data = await res.json();
    setChannelImage(data?.items?.[0].snippet?.thumbnails.medium.url);
    setIsLoading(false);
  };

  if (isLoading) {
    return <></>;
  }

  return (
    <div className="shadow-md p-2 mb-3  w-[45rem]">
      <p className="font-bold text-lg">{title}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={channelImage} className="h-12 w-12 rounded-[50%]"></img>
          <h2 className="m-3 font-bold"> {channelTitle}</h2>
        </div>
        <div>
          <span className="flex items-center bg-slate-200 h-10 w-28 justify-center rounded-full  ">
            <AiOutlineLike className="h-5 w-5 m-1" />
            {likes == undefined ? "" : likeCount(likes)}
          </span>
        </div>
      </div>
      <div className="mt-3 bg-slate-100 rounded-xl p-2 shadow-sm">
       
        <p className="p-1 font-semibold h-8 w-28 bg-white  rounded-2xl text-center ">
        
          {views == undefined ? "" : likeCount(views)}
        </p>
        <p>
          {(isReadMore & description!=undefined & description.length>200) ? description.slice(0, 200) : description}
          <span
            className="text-sky-700 cursor-pointer"
            onClick={toogleReadMore}
          >
            {isReadMore ? "....read more" : "read less"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Description;
