import { baseImg } from "../utils/Constants";
import { useNavigate } from "react-router-dom";

export default  ResCard = (props) => {
    const{name,cloudinaryImageId,cuisines,costForTwo,avgRating,areaName}=props.restaurant;
    const distance=props.restaurant?.sla?.lastMileTravel;
    // console.log(props.restaurant?.feeDetails?.restaurantId);
   let navigate=useNavigate()
let resCardClick=()=>{
 
  navigate("restaurant",{state:{resID:props.restaurant?.feeDetails?.restaurantId}})
}

     return <div className="res_card" onClick={resCardClick}>
       <img className="food_img" src={baseImg+cloudinaryImageId}/>
    <div>
   
      <p className="res_name">{name}</p>
      <p className="food_name">{areaName}</p>
      <p className="cousn_name">{cuisines.join(",")}</p>
      <div className="sub_sec_res_card">
       <span className="food_rating"><span className="fa fa-star"></span>{avgRating}</span>
       <span className="res_dstnce">{distance}KM</span>
       <span className="prce_for_two">{costForTwo}</span>
       {/* <span>{props.restaurant?.feeDetails?.restaurantId}</span> */}
       
    </div>
      </div>
     </div>;
   };