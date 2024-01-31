import { useEffect, useState } from "react";
import { restaurant_menu_api } from "./Constants";

export default useFetchRestauarentList = (resID) => {
  let [restDeatils, setResDeatails] = useState({});
  let [restMenuDeatils, setResMenuDeatails] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  let fetchData = async () => {
    let res = await fetch(
      restaurant_menu_api + resID + "&catalog_qa=undefined&submitAction=ENTER"
    );
    let data = await res.json();



let resdeatils=data.data?.cards?.filter(
  (card) => {
   
    return (
      card?.card?.card["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant" 
      
    );
  }
);

    setResDeatails(resdeatils[0].card.card.info);
   
     let arr= data.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
        (card) => {
          return (
            card.card.card["@type"] ==
              "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" 
            
          );
        }
      );

    setResMenuDeatails([...arr])
  };

  return { restDeatils, restMenuDeatils };
};
