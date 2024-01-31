import { baseImg } from "../utils/Constants";
import { useNavigate } from "react-router-dom";

export default ResCard = (props) => {
  const { name, cloudinaryImageId, cuisines, costForTwo, avgRating, areaName } =
    props.restaurant;
  const distance = props.restaurant?.sla?.lastMileTravel;

  let navigate = useNavigate();
  let resCardClick = () => {
    navigate("restaurant", { state: { resID: props.restaurant.id } });
  };

  return (
    <div
      className="res_card bg-white  break-words text-left w-64  m-5 p-5 rounded-lg transition ease-in-out hover:scale-110 "
      onClick={resCardClick}
    >
      <div className="inline rounded-lg h-10 w-14 " style={{backgroundImage:"url()"}}></div>
      <img className="food_img rounded-lg " src={baseImg + cloudinaryImageId} />
      <div>
        <p className="res_name font-semibold text-lg">{name}</p>
        <p className="food_name">{areaName}</p>
        <p className="cousn_name">{cuisines.join(",")}</p>
        <div className="sub_sec_res_card flex justify-start">
          <span className="food_rating  ">
            <span className="text-orange-400  fa fa-star"></span>
            {avgRating}
          </span>
          <span className="res_dstnce ml-3">{distance}KM</span>
          <span className="prce_for_two ml-3">{costForTwo}</span>
        </div>
      </div>
    </div>
  );
};
