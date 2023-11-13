export default RestaurantDetails = ({ restDeatils }) => {
  
 
  return (
    <>
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
            style={{ fontWeight: "bolder", fontSize: "2rem" }}
          >
            {restDeatils.name}
          </p>
          <p className="rest_cusns">{restDeatils.cuisines?.join(",")}</p>
          <p className="rest_cusns">{restDeatils.locality}</p>
          <span style={{ display: "flex", marginTop: "0.5rem" }}>
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/v1648635511/Delivery_fee_new_cjxumu"
              style={{ marginRight: "0.5rem" }}
            />{" "}
            {  (restDeatils?.expectationNotifiers!="undefined")?(restDeatils?.expectationNotifiers[0].text):("")}
          </span>
        </div>
        <div className="rest_rate">
          <span
            className="food_rating"
            style={{
              backgroundColor: "green",
              height: "2rem",
              width: "2rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span className="fa fa-star"></span>
            {restDeatils?.avgRating}
          </span>
        </div>
      </div>
    </>
  );
};
