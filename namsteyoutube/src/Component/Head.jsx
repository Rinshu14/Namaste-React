import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { toggleSidebar } from "../Redux/HamburgerSlice";
import SearchComponent from "../Component/SearchComponent";
import { youTube_logo, user_logo } from "../Utils/Constants";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUser } from "react-icons/fa6";

const Head = () => {
  const [sideBarExpand, setSidebarExpand] = useState(true);

  let dispatch = useDispatch();

  const handliClick = () => {
    dispatch(toggleSidebar(!sideBarExpand));
    setSidebarExpand(!sideBarExpand);
  };

  return (
    <div className="h-16 bg-white grid grid-flow-col  px-1  md:px-2 lg:px-9 py-4 drop-shadow-md  ">
      <div className="flex grid-cols-2">
      

<RxHamburgerMenu className="h-8 w-7 hover:cursor-pointer"
          onClick={handliClick}/>

        <img
          alt="youtube icon"
          src={youTube_logo}
          className="h-8 w-16 md:w-24 lg:w-28"
        ></img>
      </div>
      <SearchComponent />
      <div className="">
        {/* <img alt="user" src={user_logo} className=" h-8 w-11 mx-auto"></img> */}
        <FaUser className=" h-8 w-11 mx-auto"/>
      </div>
    </div>
  );
};

export default Head;
