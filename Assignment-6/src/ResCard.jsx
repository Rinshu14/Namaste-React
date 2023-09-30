import { baseImg } from "../utils/Constants";

export default  ResCard = (props) => {
    const{name,cloudinaryImageId,cuisines,costForTwo,avgRating,areaName}=props.restaurant;
    const distance=props.restaurant?.sla?.lastMileTravel;
   
     return <div className="res_card">
       <img className="food_img" src={baseImg+cloudinaryImageId}/>
    <div>
   
      <p className="res_name">{name}</p>
      <p className="food_name">{areaName}</p>
      <p className="cousn_name">{cuisines.join(",")}</p>
      <div className="sub_sec_res_card">
       <span className="food_rating"><span className="fa fa-star"></span>{avgRating}</span>
       <span className="res_dstnce">{distance}KM</span>
       <span className="prce_for_two">{costForTwo}</span>
       
    </div>
      </div>
     </div>;
   };