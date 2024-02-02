import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="bg-white  px-2 py-2 ">
      <ul className="w-32">
        <Link to="/">
          <li>Home</li>
        </Link>
        <li>Shorts</li>
        <li>Subscription</li>
        <li>History</li>
        <li>Watch Laterbnbnn</li>
      </ul>
    </div>
  );
};

export default SideBar;
