import React from "react";
import Header from "./Header";
import useFetchMovies from "../CustomHooks/useFetchMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { now_playing } from "../Utils/Constants";
import GPTSearchPage from "./GPTSearchPage";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGPTSearch = useSelector((state) => state.GPTSlice.showSearchGPT);
  useFetchMovies(now_playing);

  return (
    <div>
      <Header />
      {showGPTSearch ? (
        <GPTSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
