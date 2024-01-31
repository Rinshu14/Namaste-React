import { useState } from "react"

export default RestaurantCategory=({itemList})=>{

return (
        <div>

  {itemList.map((restaurant,index) => {
    console.log(restaurant)
      return (
          
          <RestMenuDetails
          key={restaurant.card.info.id}
          restaurant={restaurant.card.info}
         
          />
          );
        })}
        </div> 
    )
}