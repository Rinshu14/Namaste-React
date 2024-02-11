import React, { useEffect } from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";


const Body = () => {
  

  const expandSideBar = useSelector((store) => store.Hamburger.expandSideBar);
  
  return (
    <div className="flex">
      {expandSideBar ? <SideBar /> : <></>}
      <Outlet />
    </div>
  );
};

export default Body;
