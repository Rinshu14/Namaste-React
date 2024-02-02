import React from "react";
import WatchFrame from "./WatchFrame";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { closeSidebar } from "../Redux/HamburgerSlice";
import CommentContainer from "./CommentContainer"

const WatchPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeSidebar());
  }, []);



  
  return (
    <div>
      <WatchFrame />
      <CommentContainer/>
    </div>
  );
};

export default WatchPage;
