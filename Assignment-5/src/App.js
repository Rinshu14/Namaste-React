import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import restaurantsList from "../utils/Data";

const AppLayout = () => {
  const [restList, setRestList] = useState(restaurantsList);
  const[filteredList,setFilteredList]=useState(restaurantsList)

  let searchClicked = (search_string) => {
   
    

    let tyt = restList.filter((item) => {
     console.log(search_string +" and  " +item.info.name.toLowerCase())
      return item.info.name.toLowerCase().includes(search_string);
    });

    setFilteredList([...tyt]);
    console.log(tyt);
  };

  return (
    <div className="appLayout">
      <Header searchClicked={searchClicked} />
      <Body restaurantsList={filteredList} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<AppLayout />);
