import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { Link } from "react-router-dom";
const MainContainer = () => {
  return (
    <div className=" static ">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
