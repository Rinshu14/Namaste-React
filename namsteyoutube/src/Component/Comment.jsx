import { v4 as uuidv4 } from "uuid";

import React, { useState } from "react";

const Comment = ({ comment }) => {
  const { authorProfileImageUrl, authorDisplayName, textDisplay } = comment;

  const [isReadMore, setIsReadMore] = useState(true);

  const toogleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className="  border-l-[1px] border-slate-400  rounded-lg p-1 mt-3    shadow-slate-300 bg-slate-50 shadow-sm ">
      <div className="flex  items-center">
        <img
          src={authorProfileImageUrl}
          // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwfQqM21Dl_T7LP2fljWBijizM2lef4DGRHQ&usqp=CAU"
          className="h-8 w-8 rounded-[50%]"
        ></img>
        <p className="ml-2 font-bold">{authorDisplayName}</p>
      </div>
      <div>
        <p className="text-sm p-2">
          {(isReadMore  )? textDisplay.slice(0, 200) : textDisplay}
          {textDisplay.length > 200 ? (
            <span
              className="text-sky-700 cursor-pointer"
              onClick={toogleReadMore}
            >
              {isReadMore ? "  ...read more" : "  read less"}
            </span>
          ) : (
            <></>
          )}
        </p>
      </div>

      {comment?.replies?.map((item) => (
        <Comment key={uuidv4()} comment={item} />
      ))}
     
    </div>
  );
};

export default Comment;
