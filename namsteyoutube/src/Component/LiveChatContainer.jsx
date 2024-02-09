import React from "react";
import LiveMessage from "./LiveMessage";
import LiveChatInput from "./LiveChatInput";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { generateName, makeComment } from "../Utils/CommonMethods";
import { useSelector, useDispatch } from "react-redux";
import { addChatMsg } from "../Redux/LiveChatSlice";

const LiveChatContainer = () => {

  const liveChat = useSelector((state) => state.LiveChat.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    let timer = setInterval(() => {


      dispatch(
        addChatMsg({ name: generateName(4), chatText: makeComment(25) })
      );
    }, 2000);
 return () => {
      clearTimeout(timer);
    };
  }, []);


  
  return (
    <div className="ml-7 w-[20rem] p-2  h-[25rem] rounded-lg  border-2 border-slate-600  flex flex-col justify-end">
      <div className=" overflow-y-scroll scrollbar flex flex-col-reverse">
    <div className="">

        {liveChat.map((item) => {
          return <LiveMessage  key={uuidv4()} message={item} />;
        })}
        </div>
      </div>
      <LiveChatInput />
    </div>
  );
};

export default LiveChatContainer;
