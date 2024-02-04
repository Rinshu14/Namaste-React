import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addChatMsg } from "../Redux/LiveChatSlice";

const LiveChatInput = () => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();
  let clickHandle = () => {
    dispatch(
      addChatMsg({
        name: "Rinshu",
        chatText: inputText,
      })
    );
  };

  return (
    <div className="h-12 flex justify-around">
      <img
        src="https://cdn-icons-png.flaticon.com/128/14413/14413114.png"
        className="h-7 w-7  rounded-[50%]"
      ></img>
      <input
        type="text"
        placeholder="your comment"
        className="border-2 h-10 w-48 border-gray-600 rounded-xl p-2 py-1 outline-none"
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <button
        className="bg-amber-500 w-16 h-10 rounded-xl"
        onClick={clickHandle}
      >
        {" "}
        Send
      </button>
    </div>
  );
};

export default LiveChatInput;
