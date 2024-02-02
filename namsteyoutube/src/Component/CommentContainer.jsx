import React from "react";
import Comment from "./Comment";
import CommentList from "./CommentList";

const CommentContainer = () => {
  const comment = [
    {
      name: "akshay",
      commentText: "hii am akshay",
      replies: [
        {
          name: "rinshu",
          commentText: "reply1",
          replies: [
            {
              name: "rinshu",
              commentText: "reply2",
              replies: [
                {
                  name: "rinshu",
                  commentText: "reply3",
                  replies: [],
                },
              ],
            },
          ],
        },
        {
          name: "piyush",
          commentText: "reply",
          replies: [],
        },
      ],
    },








    {
      name: "akshay",
      commentText: "hii am akshay",
      replies: [
        {
          name: "rinshu",
          commentText: "hii am rinshu",
          replies: [],
        },
        {
          name: "piyush",
          commentText: "hii am piyush",
          replies: [],
        },
      ],
    },
    {
      name: "akshay",
      commentText: "hii am akshay",
      replies: [
        {
          name: "rinshu",
          commentText: "repliy",
          replies: [],
        },
        {
          name: "piyush",
          commentText: "reply",
          replies: [],
        },
      ],
    },
  ];
  return (
    <div className=" border-black p-3 m-2">
      {comment.map((item) => {
        return <Comment comment={item} />;
      })}
   
    </div>
  );
};

export default CommentContainer;
