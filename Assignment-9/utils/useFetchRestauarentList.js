import { useEffect, useState } from "react";
import { restaurant_menu_api } from "./Constants";

export default useFetchRestauarentList = (resID) => {
  // let [restaurantList, setrestaurantList] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);


  let [restDeatils,setResDeatails]=useState({})
let [restMenuDeatils,setResMenuDeatails]=useState([])

  useEffect(() => {
    fetchData();
  }, []);

  let fetchData = async () => {
    let res = await fetch(restaurant_menu_api+resID+"&catalog_qa=undefined&submitAction=ENTER");
    let data = await res.json();

setResDeatails(data.data?.cards[0]?.card?.card?.info)
   setResMenuDeatails(data.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
   
  };

  return {restDeatils, restMenuDeatils};
};
