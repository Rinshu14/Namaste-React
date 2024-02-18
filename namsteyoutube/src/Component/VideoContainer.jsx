import React, { useEffect, useState, useRef, useCallback } from "react";
import {
  youTube_API,
  youTube_API_Key,
  video_categories,
  youTube_API_for_search,
} from "../Utils/Constants";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "./Loader"

const VideoContainer = () => {
  const [videoList, setVideoList] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  const observer = useRef(null);
  const nextPageToken = useRef("");


  const suggestBar = useSelector((state) => state.SuggestionSlice.show);
  const fetchingParameters = useSelector(
    (state) => state.VideoFetchParameters.parameters
  );

  console.log("fetching parameters=" + fetchingParameters.videoCategory);

  const observerlast = useCallback((node) => {
    if (node == null) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((itemToObserve) => {
      if (itemToObserve[0].isIntersecting) {
        fetchMoreVideos();
      }
    });

    observer.current.observe(node);
  });

  let fetchVideoCategory = async () => {
    let res = await fetch(video_categories + youTube_API_Key);
    let data = await res.json();
    let arr = data.items.filter((item) => {
      return item.snippet.title == fetchingParameters.videoCategory;
    });
    return arr?.[0]?.id;
  };

  let fetchMoreVideos = async () => {

    if (nextPageToken.current == undefined) return;
    let res = await fetch(youTube_API + "&pageToken=" + nextPageToken.current);
    let data = await res.json();
    nextPageToken.current = data?.nextPageToken;
    setVideoList([...videoList, ...data?.items]);
  };

  let fetchVideos = async () => {
  
    if (fetchingParameters.flag == "V") {
      let res = await fetch(youTube_API);
      let data = await res.json();
      if (fetchingParameters.videoCategory == "All") {
        setVideoList([...data?.items]);
      } else {
        let category = await fetchVideoCategory();

        let filteredData = data?.items?.filter((item) => {
          return item?.snippet?.categoryId == category;
        });
        if (filteredData != undefined) setVideoList([...filteredData]);
      }
      nextPageToken.current = data?.nextPageToken;
    } else if (fetchingParameters.flag == "S") {
      let res = await fetch(
        youTube_API_for_search +
          fetchingParameters.serachKey +
          "&key=" +
          youTube_API_Key
      );
      let data = await res.json();
      setVideoList([...data?.items]);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    console.log("useEffect")
    fetchVideos();
  }, [fetchingParameters]);

  if (isloading) {
    return <></>;
  }

  return (
    <div className="">
      <div
        className={
          "video_container relative  drop-shadow-lg bg-slate-50 flex flex-wrap" +
          (suggestBar ? " -z-10" : "")
        }
      >
        {videoList.map((item) => {
          return (
            <Link key={item.id} to={"/watch?v3=" + item.id}>
              <VideoCard VideoDetails={item} />
            </Link>
          );
        })}
      </div>
      <div ref={observerlast}><Loader/></div>
    </div>
  );
};

export default VideoContainer;
