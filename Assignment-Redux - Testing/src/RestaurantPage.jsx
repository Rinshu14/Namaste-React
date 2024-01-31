import { useState } from "react";
import RestaurantDetails from "./RestaurantDetails";
import RestMenuDetails from "./RestMenuDetails";
import Separator from "./Separator";
import { useLocation } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory"
import useFetchRestauarentList from "../utils/useFetchRestauarentList";

export default RestaurantPage = () => {
  let location = useLocation();

  const { restDeatils, restMenuDeatils } = useFetchRestauarentList(
    location.state.resID
  );



 const[expandIndex,setExpandIndex]=useState(undefined)
  if (Object.keys(restDeatils).length == 0 || restMenuDeatils == "undefined") {
    return <></>;
  }
  let changeExpandIndexValue=(index)=>{
    (expandIndex==index)?setExpandIndex(undefined):setExpandIndex(index)
  }

  return (
    <>
      <RestaurantDetails restDeatils={restDeatils} />
      <Separator />
     
       {restMenuDeatils.map((restaurant,index) => {
       
        return (
          <RestaurantCategory
            key={restaurant.card.card.title}
          restaurant={restaurant.card.card}
          expand={expandIndex==index?true:false}
          index={index}
          changeExpandIndexValue={changeExpandIndexValue}
          />
        );
      })}
    </>
  );
};
