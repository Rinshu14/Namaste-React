import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import ShimmerUI from "./ShimmerUI";


const AppLayout = () => {
  const [restList, setRestList] = useState([]);
  const [filteredList, setFilteredList] = useState(restList);
  const [isLoading, setIsLoding] = useState(true);

  let searchClicked = (search_string) => {
    let tyt = restList.filter((item) => {
      return item.info.name.toLowerCase().includes(search_string);
    });

    setFilteredList([...tyt]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  let fetchData = async () => {
    let res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0685894&lng=72.9005106&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let data = await res.json();
    // console.log(
    //   ff.data.cards[5].card.card.gridElements.infoWithStyle.restaurants[0].info
    // );
    setRestList([
      ...data.data.cards[5].card.card.gridElements.infoWithStyle.restaurants,
    ]);
    setFilteredList([
      ...data.data.cards[5].card.card.gridElements.infoWithStyle.restaurants,
    ]);
    setIsLoding(false);
  };

  if (isLoading) {
    return <div className="appLayout">
   
    <ShimmerUI />
   
    
  </div>;
  } else {
    return (
      <div className="appLayout">
        <Header searchClicked={searchClicked} />
        <Body restaurantsList={filteredList} />
  
      </div>
    );
  }
};

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<AppLayout />);
