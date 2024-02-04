import React from "react";
import WatchFrame from "./WatchFrame";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { closeSidebar } from "../Redux/HamburgerSlice";
import CommentContainer from "./CommentContainer";
import LiveChatContainer from "./LiveChatContainer";

const WatchPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeSidebar());
  }, []);

  return (
    <div className="  m-auto mt-11">
      <div className=" flex">
        <WatchFrame />
        <LiveChatContainer />
      </div>
      <CommentContainer />
    </div>
  );
};

export default WatchPage;
