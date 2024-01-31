import { useState, useEffect } from "react";

export default SeachBar = ({ srch_clck }) => {
  let [srch_strng, setSrchStrng] = useState("");

  let searchClicked = (srch_strng) => {
    srch_clck(srch_strng);
  };
  return (
    <div className="search m-auto">
      <input
        className="search_bar h-5  sm:[25rem] md:w-[35rem] lg:w-[45rem]  m-3 p-5 rounded-lg  bg-slate-900 text-white"
        type="text"
        placeholder="Search"
        onChange={(event) => {
          setSrchStrng(event.target.value.toLowerCase());
          searchClicked(event.target.value.toLowerCase());
        }}
      ></input>

      <span
        className="search_img"
        onClick={() => searchClicked(srch_strng)}
      ></span>
    </div>
  );
};
