import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { toggleSidebar } from "../Redux/HamburgerSlice";
import { setShowFalse, setShowTrue } from "../Redux/SuggestionSlice";
import {addInSuggestion} from "../Redux/SuggestionResultCacheSlice"
import {
  search_Icon,
  youTube_logo,
  hamburger_logo,
  user_logo,
  search_sugst_api,
} from "../Utils/Constants";

const Head = () => {
  const [sideBarExpand, setSidebarExpand] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [sugestionList, setSugestionList] = useState([]);

  const suggestBar = useSelector((state) => state.SuggestionSlice.show);
  const SuggestionResultCache =useSelector((state)=>state.SuggestionResultCache);

  let dispatch = useDispatch();

  useEffect(() => {
    
    if(SuggestionResultCache[searchText]){
      setSugestionList([...SuggestionResultCache[searchText]]);
      return;
    }
   
    const timer = setTimeout(() => {
      getSearchSuggestions();
    }, 200);

    const getSearchSuggestions = async () => {
      
      const response = await fetch(search_sugst_api + searchText);
      const sugesttions = await response.json();
      setSugestionList([...sugesttions[1]]);
    dispatch(addInSuggestion({[searchText]:[...sugesttions[1]]}))
    };

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const handliClick = () => {
    dispatch(toggleSidebar(!sideBarExpand));
    setSidebarExpand(!sideBarExpand);
  };

  const handleOnChange = (e) => {
    setSearchText(e.target.value);
  };
  const setInputText = () => {
    console.log("in setInputText");
    let input = document.querySelector("search");
  };

  return (
    <div className="h-12 bg-white grid grid-flow-col  px-1  md:px-2 lg:px-9 py-2 drop-shadow-md  ">
      <div className="flex grid-cols-2">
        <img
          alt="menu"
          src={hamburger_logo}
          className="h-8 w-7 hover:cursor-pointer"
          onClick={handliClick}
        ></img>
        <img
          alt="youtube icon"
          src={youTube_logo}
          className="h-8 w-16 md:w-24 lg:w-28"
        ></img>
      </div>
      <div className="flex grid-cols-10 z-20">
        <div>
          <input
            type="text"
            placeholder="Search"
            className="search border-2 border-slate-400 h-8 w-24 md:w-72  lg:w-96 px-3 rounded-l-2xl outline-none"
            onChange={handleOnChange}
            onFocus={() => {
              //setShowSuggestionList(true);
              dispatch(setShowTrue());
            }}
            onBlur={() => {
              //setShowSuggestionList(false);
              //console.log("onBlur")
              dispatch(setShowFalse());
            }}
          ></input>
          {suggestBar ? (
            <div
              className="fixed z-50 bg-white rounded-lg py-2 px-3  w-72  "
              onFocus={() => {
                dispatch(setShowTrue);
              }}
            >
              <ul className="">
                {sugestionList.map((item) => {
                  return (
                    <li
                      //key={item}
                      className="hover:bg-slate-100 px-2 py-1 rounded-lg"
                      onClick={() => {
                        console.log("onclick");
                      }}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            <></>
          )}
        </div>
        <button
          className="h-8 w-10 bg-contain bg-no-repeat border-2 border-l-0 rounded-r-2xl border-slate-400"
          style={{
            backgroundImage: `url(${search_Icon})`,
          }}
        ></button>
      </div>

      <div className="">
        <img alt="user" src={user_logo} className=" h-8 w-11 mx-auto"></img>
      </div>
    </div>
  );
};

export default Head;
