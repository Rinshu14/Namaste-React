import { v4 as uuidv4 } from "uuid";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { youTube_API_Key, comments_on_video } from "../Utils/Constants";

import React from "react";
import Comment from "./Comment";

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

  const [searchParams, setSearchParams] = useSearchParams();
  const [commentsData, setCommentsData] = useState([]);
  const [isLoading,setIsLoading]=useState(true)

  useEffect(() => {
    getVideoDetails();
  }, []);

  const getVideoDetails = async () => {
    let response = await fetch(
      comments_on_video + searchParams.get("v3") + "&key=" + youTube_API_Key
    );
    let data = await response.json();

    setCommentsData([...data?.items]);
    setCommentsData(false)
  };
if(isLoading)<></>
  return (
    <div className=" border-black w-[45rem]">
      <p className="font-bold mt-2">Comments ({commentsData.length})</p>
      {commentsData.map((item) => {
        return (
          <Comment
            Key={uuidv4()}
            comment={item.snippet.topLevelComment.snippet}
          />
        );
      })}
    </div>
  );
};

export default CommentContainer;
