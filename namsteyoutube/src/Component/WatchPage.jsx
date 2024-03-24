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
  
  const [searchParams, setSearchParams] = useSearchParams();
  const [isloading, setIsLoading] = useState(true);

  const VideoDetails = useSelector((state) => state.Video.VideoDetails);

  const screenSize= useSelector((state)=>state.ScreenSize.screenSize)

  useEffect(() => {
   
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
  
  if (isloading) return <></>;
  else {
    return (
      <div className=" mt-11 lg:m-auto lg:mt-11">
        <div className=" flex">
          <WatchFrame />
         {(screenSize=="Mobile")?<></> :<LiveChatContainer />}
        </div>
        <div className="flex">
          <div>
            <Description />
           
            {(screenSize=="Mobile")?<RelatedVideoContainer/> :<CommentContainer />}
            
          </div>
          {(screenSize=="Mobile")?<></> :<RelatedVideoContainer/>}
          {/* <RelatedVideoContainer /> */}
        </div>
      </div>
    );
  }
};

export default WatchPage;
