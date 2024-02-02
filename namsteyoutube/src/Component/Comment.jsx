import React from "react";

const Comment = ({ comment }) => {

  
  return (
    <div className="  border-l-[1px] border-slate-400   p-1 m-2 mt-3   shadow-slate-300 bg-slate-100 shadow-sm ">
      <div className="flex ">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwfQqM21Dl_T7LP2fljWBijizM2lef4DGRHQ&usqp=CAU"
          className="h-5 w-10"
        ></img>
        <p>{comment.name}</p>
      </div>
      <div>
        <p className="">{comment.commentText}</p>
      </div>
       
       {comment.replies.map((item)=>
                <Comment comment={item}/>
            )} 


    </div>
  );
};

export default Comment;
