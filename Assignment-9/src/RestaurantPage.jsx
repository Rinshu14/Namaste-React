// import {useState, useEffect } from "react";
import RestaurantDetails from "./RestaurantDetails";
import RestMenuDetails from "./RestMenuDetails"
import Separator from "./Separator";
import { useLocation } from "react-router-dom";
// import { restaurant_menu_api } from "../utils/Constants";

export default RestaurantPage=()=>{
let  location=useLocation();
  
// let [restDeatils,setResDeatails]=useState({})
// let [restMenuDeatils,setResMenuDeatails]=useState([])

  // useEffect(()=>{
  // fetchData();
  // },[])


  const {restDeatils,restMenuDeatils}=useFetchRestauarentList(location.state.resID);


//   let fetchData=async ()=>{
//     let res =await fetch( restaurant_menu_api+location.state.resID+"&catalog_qa=undefined&submitAction=ENTER")
//    let data=await res.json()
// setResDeatails(data.data?.cards[0]?.card?.card?.info)
//    setResMenuDeatails(data.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
  
// }

if (Object.keys(restDeatils).length == 0 || (restMenuDeatils=="undefined"  ) ) {
    return <></>;
  }
    return (
        <>
         <RestaurantDetails restDeatils={restDeatils}/>
         <Separator/>
         {
         restMenuDeatils.map((restaurant) => {
         return (
              <RestMenuDetails key={restaurant.card.info.id} restaurant={restaurant.card.info} />
            );
         })
        }
    </>
    )
}