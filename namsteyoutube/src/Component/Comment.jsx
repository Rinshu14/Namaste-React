import { v4 as uuidv4 } from 'uuid';

import React from "react";

const Comment = ({ comment }) => {

const {authorProfileImageUrl,authorDisplayName,textDisplay}=comment
  
  return (
    <div className="  border-l-[1px] border-slate-400  rounded-lg p-1 mt-3  w-  shadow-slate-300 bg-slate-100 shadow-sm ">
      <div className="flex  items-center">
        <img
          src={authorProfileImageUrl}
          // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwfQqM21Dl_T7LP2fljWBijizM2lef4DGRHQ&usqp=CAU"
          className="h-8 w-8 rounded-[50%]"
        ></img>
        <p className="ml-2 font-bold">{authorDisplayName}</p>
      </div>
      <div>
        <p className="text-sm p-2">{textDisplay}</p>
      </div>
       
       {comment?.replies?.map((item)=>
                <Comment key={uuidv4()} comment={item}/>
            )} 


    </div>
  );
};

export default Comment;
