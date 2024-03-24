import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { Link } from "react-router-dom";
const MainContainer = () => {
  return (
    <div className="flex-1 h-[100%] mt-16 ">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
