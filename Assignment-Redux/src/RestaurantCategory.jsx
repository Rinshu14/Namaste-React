import { useState } from "react";
import RestaurantCategoryItems from "./RestaurantCategoryItems";

export default RestaurantCategory = ({
  restaurant,
  expand,
  index,
  changeExpandIndexValue,
}) => {

 const handleClick=()=>
  {
    changeExpandIndexValue(index);
  }

  return (
    <div className=" w-[42rem] m-auto rounded-lg p-1 px-5 mt-3 text-lg font-semibold bg-white">
      <div className="flex justify-between">
        <span>{restaurant.title}</span>
        <span className="cursor-pointer" onClick={handleClick}>
          ⬇️
        </span>
      </div>
      {expand ? (
        <RestaurantCategoryItems itemList={restaurant.itemCards} />
      ) : (
        <></>
      )}
    </div>
  );
};
