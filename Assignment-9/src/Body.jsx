import { useOutletContext } from "react-router-dom";
import Banner from "./Banner";
import ResCard from "./ResCard";
import { useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { useState, useEffect } from "react";
import { restaurant_list_api } from "../utils/Constants";
import SearchBar from "./SearchBar";
import {RecommendedRestCard} from "./RecommendedRestCard";


const RecommendedRest = RecommendedRestCard(ResCard)



export default Body = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [restList, setRestList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  let fetchData = async () => {
    let res = await fetch(restaurant_list_api);
    let data = await res.json();

    setRestList([
      ...data.data.cards[2].card.card.gridElements?.infoWithStyle.restaurants,
    ]);
    setFilteredList([
      ...data.data.cards[2].card.card.gridElements?.infoWithStyle.restaurants,
    ]);
    setIsLoading(false);
  };



  const isonLine=useOnlineStatus();
  let searchClicked = (search_string) => {
    let tyt = restList.filter((item) => {
      return item.info.name.toLowerCase().includes(search_string);
    });

    setFilteredList([...tyt]);
  };
  if( !isonLine){
    return <h1>Hey yaar you are offline on your internet na 😒</h1>
  }
 else if (!isLoading) {
    return (
      <>
        <Banner />
        <SearchBar srch_clck={searchClicked} />
        <div className="res_card_container">
          {filteredList.map((restaurant) => {
            return <>
            {restaurant.info.avgRating>4? <RecommendedRest key={restaurant.info.id}  restaurant={restaurant.info}/> :  <ResCard key={restaurant.info.id} restaurant={restaurant.info} />}
              {/* // <ResCard key={restaurant.info.id} restaurant={restaurant.info} /> */}
              </>
          })}
        </div>
      </>
    );
  } else return <ShimmerUI />;
};
