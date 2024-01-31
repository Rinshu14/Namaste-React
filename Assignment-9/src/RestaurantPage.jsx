// import {useState, useEffect } from "react";
import RestaurantDetails from "./RestaurantDetails";
import RestMenuDetails from "./RestMenuDetails"
import Separator from "./Separator";
import { useLocation } from "react-router-dom";
import useFetchRestauarentList from "../utils/useFetchRestauarentList"

export default RestaurantPage=()=>{
let  location=useLocation();


  const {restDeatils,restMenuDeatils}=useFetchRestauarentList(location.state.resID);



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