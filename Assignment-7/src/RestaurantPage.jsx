import {useState, useEffect } from "react";
import RestaurantDetails from "./RestaurantDetails";
import RestMenuDetails from "./RestMenuDetails"
import Separator from "./Separator";
import { useLocation } from "react-router-dom";

export default RestaurantPage=()=>{
let  location=useLocation();
  
let [restDeatils,setResDeatails]=useState({})
let [restMenuDeatils,setResMenuDeatails]=useState([])

  useEffect(()=>{
  fetchData();
  },[])
  let fetchData=async ()=>{
    // https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0685894&lng=72.9005106&restaurantId=78036&catalog_qa=undefined&submitAction=ENTER
 
    let res =await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0685894&lng=72.9005106&restaurantId="+location.state.resID+"&catalog_qa=undefined&submitAction=ENTER")
   let data=await res.json()
    console.log(data.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card)
setResDeatails(data.data?.cards[0]?.card?.card?.info)
   setResMenuDeatails(data.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
  
}
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
    
        {/* <RestMenuDetails/> */}
        </>
    )
}