import { logo_img } from "../utils/Constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

export default Header = () => {
  let [btnState, setbtnState] = useState("Login");
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });

  const isOnline = useOnlineStatus();

  return (
    <nav className="lg:h-14 md:h-20 sm:h-20 bg-white  flex  px-8 text-sm justify-between text-slate-700 ">
      <img className="h-14 " src={logo_img} />
      <div className="hedr_list ">
        <ul className="list flex h-[100%]  items-center font-medium  ">
          <li className="  rounded-lg  m-2 p-1  hover:bg-orange-300 ">
            {" "}
            Online Status{isOnline ? "🟢" : "🔴"}{" "}
          </li>

          <li className="m-2 p-1 hover:bg-orange-300 rounded-lg">
            <Link to={"/groceries"} className="link">
              Groceries
            </Link>
          </li>
          <li className="mx-2 p-1 hover:bg-orange-300 rounded-lg ">
            <Link to={"/"} className="link">
              Home
            </Link>
          </li>
          <li className="mx-2 p-1 hover:bg-orange-300 rounded-lg">
            <Link to={"/About"} className="link">
              About Us
            </Link>
          </li>
          <li className=" mx-2 p-1 hover:bg-orange-300 rounded-lg ">
            <Link to={"/Contact"} className="link">
              Contact Us
            </Link>
          </li>
          <li className=" mx-2 p-1 hover:bg-orange-300 rounded-lg">
            <Link to={"/Cart"} className="link">
              Cart - {cartItems.length}
            </Link>
          </li>
          <li
            className="mx-2 sm:m-1 p-1 hover:bg-orange-300 rounded-lg"
            onClick={() => {
              console.log(onclick)
              setbtnState(btnState == "Login" ? "LogOut" : "Login");
            }}
          >
            {btnState}
          </li>
        </ul>
      </div>
    </nav>
  );
};
