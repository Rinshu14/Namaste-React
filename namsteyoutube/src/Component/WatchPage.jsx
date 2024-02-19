import React, { useState } from "react";
import WatchFrame from "./WatchFrame";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { closeSidebar } from "../Redux/HamburgerSlice";
import CommentContainer from "./CommentContainer";
import LiveChatContainer from "./LiveChatContainer";
import { addVideoDetails } from "../Redux/VideoSlice";
import { GetVideoById, youTube_API_Key } from "../Utils/Constants";
import RelatedVideoContainer from "./RelatedVideoContainer";
import Description from "./Description";

const WatchPage = () => {
  const dispatch = useDispatch();
  console.log(useSearchParams())
  const [searchParams, setSearchParams] = useSearchParams();
  const [isloading, setIsLoading] = useState(true);

  const VideoDetails = useSelector((state) => state.Video.VideoDetails);

console.log(searchParams)
  useEffect(() => {
    console.log("in watch page useEffect")
    dispatch(closeSidebar());
    getVideoDetails();
  }, [searchParams]);

  const getVideoDetails = async () => {
    let response = await fetch(
      GetVideoById + searchParams.get("v3") + "&key=" + youTube_API_Key
    );
    let data = await response.json();
    dispatch(addVideoDetails(data));
    setIsLoading(false);
  };
  console.log("in return of watch page")
  if (isloading) return <LiveChatContainer />;
  else {
    return (
      <div className="  m-auto mt-11">
        <div className=" flex">
          <WatchFrame />
          <LiveChatContainer />
        </div>
        <div className="flex">
          <div>
            <Description />
            <CommentContainer />
          </div>
          <RelatedVideoContainer />
        </div>
      </div>
    );
  }
};

export default WatchPage;
