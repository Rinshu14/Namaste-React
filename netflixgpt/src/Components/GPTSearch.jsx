import React, { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { search, search_placeHolder } from "../Utils/Constants";

import FetchResultsFromGPT from "../Utils/FetchResultsFromGPT";
import { addMovieNames } from "../Redux/GPTSlice";
import { useDispatch } from "react-redux";

const GPTSearch = () => {

  const search_input = useRef(null);
  const dispatch = useDispatch();
const handleSearchClick = async () => {
    let { movieNames, movieResults } = await FetchResultsFromGPT(
      search_input.current.value
    );

    dispatch(addMovieNames({ movieNames, movieResults }));
  };

  return (
    <div className="flex m-14 mx-48   ">
      <div className="bg-slate-800 flex items-center justify-center px-2 rounded-l-lg">
        <CiSearch className="text-slate-200 text-3xl font-extrabold" />
      </div>
      <input
        type="text"
        placeholder={search_placeHolder}
        className="search bg-slate-800 h-14 w-24 md:w-72  lg:w-[44rem] px-3  outline-none text-slate-200 text-lg"
        ref={search_input}
      ></input>

      <button
        className="h-14 w-32    rounded-r-lg bg-red-700 text-slate-100 text-xl"
        onClick={handleSearchClick}
      >
        {search}
      </button>
    </div>
  );
};

export default GPTSearch;
