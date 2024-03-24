import React from "react";
import { useDispatch } from "react-redux";
import {setVideoCategory} from "../Redux/VideoFetchParameters"

const Button = ({ name }) => {

  const dispatch =useDispatch();

  return (
    <div className="bg-slate-300 h-8 text-sm rounded-2xl px-3 py-1 m-[0.66rem]  sm:m-3 flex items-center hover:bg-slate-400" 
    onClick={()=>{
      
      dispatch(setVideoCategory(name))}}>
      {name}
    </div>
  );
};

export default Button;
