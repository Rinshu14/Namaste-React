import React from "react";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { MdSubscriptions } from "react-icons/md";
import { VscHistory } from "react-icons/vsc";
import { MdWatchLater } from "react-icons/md";
import { BiSolidVideos } from "react-icons/bi";
import { AiOutlineLike } from "react-icons/ai";
import { FaFireAlt } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { CiMusicNote1 } from "react-icons/ci";
import { SiYoutubegaming } from "react-icons/si";
import { GiNewspaper } from "react-icons/gi";
import { AiOutlineBulb } from "react-icons/ai";
import { useSelector } from "react-redux";

const SideBar = () => {
  const screenSize = useSelector((state) => state.ScreenSize.screenSize);
  const position = screenSize == "Mobile" ? "absolute z-30" : "";

  return (
    <div
      className={` px-2 py-2 mt-12 h-[102%] bg-white shadow-md shadow-slate-200 ${position} `}>
      <ul className="w-36 text-sm">
        <Link to="/">
          <li className="flex items-center my-3">
            <IoMdHome className="mr-6 h-6 w-7" />
            Home
          </li>
        </Link>
        <li className="flex items-center my-3">
          <img
            src="data:image/png;base64,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"
            className="h-7 w-8 mr-5 "
          ></img>
          Shorts
        </li>
        <li className="flex items-center my-3">
          <MdSubscriptions className="mr-6 h-6 w-7" />
          Subscription
        </li>
        <li>
          <hr className=""></hr>
        </li>
        <li className="flex items-center my-3">
          {" "}
          <VscHistory className="mr-6 h-5 w-7" />
          History
        </li>
        <li className="flex items-center my-3">
          <BiSolidVideos className="mr-6 h-6 w-7" />
          your Videos
        </li>
        <li className="flex items-center my-3">
          <MdWatchLater className="mr-6 h-6 w-7" />
          Watch Later
        </li>
        <li className="flex items-center my-3">
          <AiOutlineLike className="mr-6 h-6 w-7" />
          Liked Videos
        </li>
        <li>
          <hr className=""></hr>
        </li>
        <li className="font-medium text-lg mt-1">Explore</li>
        <li className="flex items-center my-3">
          <FaFireAlt className="mr-6 h-6 w-7" />
          Trending
        </li>
        <li className="flex items-center my-3">
          <GiShoppingCart className="mr-6 h-6 w-7" />
          Shopping
        </li>
        <li className="flex items-center my-3">
          <CiMusicNote1 className="mr-6 h-6 w-7" />
          Music
        </li>
        <li className="flex items-center my-3">
          <SiYoutubegaming className="mr-6 h-6 w-7" />
          Gaming
        </li>
        <li className="flex items-center my-3">
          <GiNewspaper className="mr-6 h-6 w-7" />
          News
        </li>
        <li className="flex items-center my-3">
          <AiOutlineBulb className="mr-6 h-6 w-7" />
          Learning
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
