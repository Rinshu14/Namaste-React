import { baseImg } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addItem } from "../Redux/CartSlice";

export default RestMenuDetails = ({ restaurant }) => {
  const { name, price, imageId, ratings, description } = restaurant;

let dispatch=useDispatch();
  let handleAddItemClick=()=>{
    dispatch(addItem(restaurant))
  }

  
  return (
    <div className="w-[40rem] m-auto  ">
      <div className="rest_detls bg-white p-4 flex justify-between w-[40rem] m-auto  text-left rounded-lg ">
        <div className="rest_info text-sm w-[30rem]">
          <p className="rest_name font-bold text-lg mb-3">{name}</p>

          <span className="flex m-2 ml-0">
            <p className="rest_price">${price / 100} |</p>
            <p
              className="mx-2 px-2 rounded-lg"
              style={{ color: "#f17171", backgroundColor: "#ebc7c7" }}
            >
              <span className="fa fa-star"></span>{" "}
              {" " + (ratings?.aggregatedRating?.rating != undefined)
                ? ratings?.aggregatedRating?.rating
                : "N/A"}
            </p>
          </span>
          {description == undefined ? (
            <></>
          ) : (
            <p className="rest_desc">{description}</p>
          )}
        </div>
        <div
          className="rcmnd_food_img rounded-lg   h-40 w-40 "
          style={{
            backgroundImage: `url(${baseImg + imageId})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className=" bg-gray-900 text-white h-7 w-14 rounded-lg m-auto text-center  mt-[8rem]" onClick={handleAddItemClick}>
            Add+
          </div>
        </div>
      </div>
      <hr className="border-[0.5px] border-gray-400"></hr>
    </div>
  );
};
