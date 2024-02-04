import React from "react";

const LiveMessage = ({message}) => {
  return (
    <div className="flex  m-2">
      <img
        src="https://cdn-icons-png.freepik.com/256/979/979585.png?ga=GA1.1.1105978502.1706947933&semt=sph"
        className="h-6 w-6  rounded-[50%]"  
      ></img>
      <p className="ml-1 font-bold text-sm">{message.name}</p>
      <p className="ml-3 break-all text-xs">{message.chatText} </p>
    </div>
  );
};

export default LiveMessage;
