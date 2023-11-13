


import { baseImg } from "../utils/Constants";
export default RestMenuDetails = ({restaurant}) => {

const{name,price,imageId,ratings,description}=restaurant;


  return (
    
    <div style={{ width: "40rem", margin: "auto", marginTop: "2rem" }}>
      <div
        className="rest_detls"
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "40rem",
          margin: "auto",
          marginTop: "3rem",
        }}
      >
        <div className="rest_info">
          <p
            className="rest_name"
            style={{ fontWeight: "bolder", fontSize: "1.3rem",marginBottom:"3px" }}
          >
         {name}
          </p>
          
          <span style={{ display: "flex" ,margin:"0.5rem",marginLeft:"0px"}}>
            <p className="rest_price">${price/100} |</p>
            <p style={{ color: "#f17171", backgroundColor: "#ebc7c7" }}>
            <span className="fa fa-star"></span> {" "+ (ratings?.aggregatedRating?.rating != undefined)?ratings?.aggregatedRating?.rating : "N/A"}
             
            </p>
          </span>
          <p className="rest_desc">{description}</p>
        </div>
        <div className="rcmnd_food_img" style={{ borderRadius: "1rem" }}>
          {/* <span className="food_rating" style={{backgroundColor:"green", height:"2rem" ,width:"2rem",display:"flex",justifyContent:"center",alignItems:"center"}}><span className="fa fa-star" ></span>4</span> */}
          <img
            src={baseImg+imageId}
            style={{ borderRadius: "1rem", height: "6rem", width: "7rem" }}
          />
        </div>
      </div>
      <hr></hr>
    </div>
  );
};
