import { useOutletContext } from "react-router-dom";
import Banner from "./Banner";
import ResCard from "./ResCard";
import { useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { useState,useEffect } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";

export default Body = () => {
  //  console.log( useOutletContext())
  //  console.log("body called")
  const [isLoading, setIsLoading] = useState(true);
  const [restList, setRestList] = useState([]);
  const [filteredList, setFilteredList] = useState(restList);

console.log(useState())
  useEffect(() => {
    fetchData();
  }, []);

  let fetchData = async () => {
    let res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0685894&lng=72.9005106&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let data = await res.json();
    
    setRestList([
      ...data.data.cards[2].card.card.gridElements?.infoWithStyle.restaurants,
    ]);
    setFilteredList([
      ...data.data.cards[2].card.card.gridElements?.infoWithStyle.restaurants,
    ]);
    setIsLoading(false);
  };

  let searchClicked = (search_string) => {
    let tyt = restList.filter((item) => {
       
      return item.info.name.toLowerCase().includes(search_string);
    });

    setFilteredList([...tyt]);
  };
  if (!isLoading) {
    // console.log(restaurant)
    return (
      
      // <div className="app_body">
      <>
     
        <Banner />
  <SearchBar  srch_clck={searchClicked}/>
        <div className="res_card_container">
          {filteredList.map((restaurant) => {
            return (
              <ResCard key={restaurant.info.id} restaurant={restaurant.info} />
            );
          })}
        </div>
        </>
    );
  } else return <ShimmerUI />;
};
