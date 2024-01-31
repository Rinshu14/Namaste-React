export default RestaurantDetails = ({ restDeatils }) => {
  return (
    <>
      <div className="rest_detls flex justify-between w-[40rem] m-auto mt-[0.5rem] text-left">
        <div className="rest_info">
          <p className="rest_name font-bold text-[2rem]">{restDeatils.name}</p>
          <p className="rest_cusns">{restDeatils.cuisines?.join(",")}</p>
          <p className="rest_cusns">{restDeatils.locality}</p>
          <span className="flex mt-3">
            <img
              className="mr-[0.5rem]"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/v1648635511/Delivery_fee_new_cjxumu"
            />{" "}
            {restDeatils?.expectationNotifiers != "undefined"
              ? restDeatils?.expectationNotifiers[0].text
              : ""}
          </span>
        </div>
        <div className="rest_rate mt-6">
          <span className="food_rating bg-green-400 h-8 w-8  p-6 rounded-lg flex justify-center items-center">
            <span className="fa fa-star"></span>
            {restDeatils?.avgRating}
          </span>
        </div>
      </div>
    </>
  );
};
