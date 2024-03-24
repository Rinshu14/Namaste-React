import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { toggleSidebar } from "../Redux/HamburgerSlice";
import SearchComponent from "../Component/SearchComponent";
import { youTube_logo, user_logo } from "../Utils/Constants";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUser } from "react-icons/fa6";
import { addscreenSize } from "../Redux/ScreenSizeSlice";

const Head = () => {
  const [sideBarExpand, setSidebarExpand] = useState(true);
  let dispatch = useDispatch();

  useEffect(() => {
    let updateStoreOnResize = () => {
      if (window.innerWidth <= 1024) {
        console.log("inner width="+window.innerWidth )
        dispatch(addscreenSize("Mobile"));
      } else {
        dispatch(addscreenSize("Desktop"));
      }
    };
    window.addEventListener("resize", updateStoreOnResize);
  }, []);

  const handliClick = () => {
    dispatch(toggleSidebar(!sideBarExpand));
    setSidebarExpand(!sideBarExpand);
  };

  return (
    <div className="w-screen  sm:h-[10%] md:h-[5%] lg:h-[10%] fixed z-50 bg-white grid grid-flow-col   px-1  md:px-2 lg:px-9 py-4 drop-shadow-md  ">
      <div className="flex items-center">
        <RxHamburgerMenu
          className="h-5 sm:h-8 w-7 hover:cursor-pointer"
          onClick={handliClick}
        />

        <img
          alt="youtube icon"
          src={youTube_logo}
          className="h-8 w-20  md:w-24 lg:w-28"
        ></img>
      </div>
      <SearchComponent />
      <div className="flex items-center">
        <FaUser className=" h-4 w-8 sm:h-8 sm:w-11 mx-auto" />
      </div>
    </div>
  );
};

export default Head;
