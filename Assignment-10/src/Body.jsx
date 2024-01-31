
import Banner from "./Banner";
import ResCard from "./ResCard";
import { useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { useState, useEffect } from "react";
import { restaurant_list_api } from "../utils/Constants";
import SearchBar from "./SearchBar";
import HigherOrderComponent from "./HigherOrderComponent";

export default Body = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [restList, setRestList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  let PromotedHigherOrderComponent = HigherOrderComponent(ResCard);

  useEffect(() => {
    fetchData();
  }, []);

  let fetchData = async () => {
    let res = await fetch(restaurant_list_api);
    let data = await res.json();
    

    let arr = data.data.cards.filter((item) => {
      return (
        item.card.card["@type"] ==
        "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget"
      );
    });

    arr = arr.filter((item) => {
      return item.card.card?.id == "top_brands_for_you";
    });

    setRestList([...arr[0].card.card.gridElements?.infoWithStyle.restaurants]);
    setFilteredList([
      ...arr[0].card.card.gridElements?.infoWithStyle.restaurants,
    ]);
    setIsLoading(false);
  };

  const isonLine = useOnlineStatus();
  let searchClicked = (search_string) => {
    let tyt = restList.filter((item) => {
      return item.info.name.toLowerCase().includes(search_string);
    });

    setFilteredList([...tyt]);
  };
  if (!isonLine) {
    return <h1>Hey yaar you are offline on your internet na 😒</h1>;
  } else if (!isLoading) {
    return (
      <>
        <Banner />
        <SearchBar srch_clck={searchClicked} />
        <div className="res_card_container flex flex-wrap justify-center  m-auto">
          {filteredList.map((restaurant) => {
            if (restaurant.info.avgRating >= 4.5) {
              return (
                <PromotedHigherOrderComponent
                  key={restaurant.info.id}
                  restaurant={restaurant.info}
                />
              );
            } else {
              return (
                <ResCard
                  key={restaurant.info.id}
                  restaurant={restaurant.info}
                />
              );
            }
          })}
        </div>
      </>
    );
  } else return <ShimmerUI />;
};
