import { logo_img } from "../utils/Constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

export default Header = () => {
  let [btnState, setbtnState] = useState("Login");
  const isOnline = useOnlineStatus();
 let loggedInUser=useContext(UserContext)
 console.log(loggedInUser)
  return (
    <nav className="lg:h-14 md:h-20 sm:h-20 bg-white  flex  px-8 text-sm justify-between text-slate-700 ">
      <img className="h-14 " src={logo_img} />
      <div className="hedr_list ">
        <ul className="list flex h-[100%]  items-center font-medium  ">
     
          <li className="  rounded-lg  m-2 p-1  hover:bg-orange-300 ">
            {" "}
            Online Status{isOnline ? "🟢" : "🔴"}{" "}
          </li>
          <li className="  rounded-lg  m-2 p-1  hover:bg-orange-300 ">
         {loggedInUser}
          
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
          <li className=" mx-2 p-1 hover:bg-orange-300 rounded-lg">Cart-3</li>
          <li
            className="mx-2 sm:m-1 p-1 hover:bg-orange-300 rounded-lg"
            onClick={() => {
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
