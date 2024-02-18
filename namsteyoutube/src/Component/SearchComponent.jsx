import React from "react";
import { search_Icon, search_sugst_api } from "../Utils/Constants";
import { setShowFalse, setShowTrue } from "../Redux/SuggestionSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addInSuggestion } from "../Redux/SuggestionResultCacheSlice";
import { setSearchKey } from "../Redux/VideoFetchParameters";

const SearchComponent = () => {
  let dispatch = useDispatch();
  const suggestBar = useSelector((state) => state.SuggestionSlice.show);

  const SuggestionResultCache = useSelector(
    (state) => state.SuggestionResultCache
  );

  const [searchText, setSearchText] = useState("");
  const [sugestionList, setSugestionList] = useState([]);

  useEffect(() => {
    if (SuggestionResultCache[searchText]) {
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
      dispatch(addInSuggestion({ [searchText]: [...sugesttions[1]] }));
    };

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const handleOnChange = (e) => {
    setSearchText(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      dispatch(setSearchKey(e.target.value));
    }
  };

  const handleSearchClick = () => {
    dispatch(setShowFalse());
    dispatch(setSearchKey(searchText));
  };

  return (
    <div className="flex grid-cols-10 z-20">
      <div
        onBlur={async () => {
          setTimeout(() => {
            dispatch(setShowFalse());
          }, 200);
        }}
      >
        <input
          type="text"
          placeholder="Search"
          className="search border-2 border-slate-400 h-9 w-24 md:w-72  lg:w-96 px-3 rounded-l-2xl outline-none"
          onChange={handleOnChange}
          value={searchText}
          onFocus={() => {
            dispatch(setShowTrue());
          }}
          onKeyDown={handleKeyDown}
        ></input>
        {suggestBar ? (
          <div className="fixed z-50 bg-white rounded-lg py-2 px-3  w-72  ">
            <ul className="">
              {sugestionList.map((item) => {
                return (
                  <li
                    key={item}
                    className="hover:bg-slate-100 px-2 py-1 rounded-lg"
                    onClick={() => {
                      setSearchText(item);
                      dispatch(setShowFalse())
                      dispatch(setSearchKey(searchText));
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
        className="h-9 w-11 bg-contain bg-no-repeat border-2 border-l-0 rounded-r-2xl border-slate-400"
        style={{
          backgroundImage: `url(${search_Icon})`,
        }}
        onClick={handleSearchClick}
      ></button>
    </div>
  );
};

export default SearchComponent;
