import { logo_img } from "../utils/Constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"

export default Header = () => {

  
    let [btnState,setbtnState]=useState("Login");
const isOnline=useOnlineStatus();


    return (
      <div className="header">
        <img
          className="logo_img"
          src={logo_img}
        />
     {/* <div className="search">
  
       <input className="search_bar" type="text" placeholder="Search" onChange={(event)=>{
        
        setSrchStrng(event.target.value.toLowerCase())
        searchClicked(event.target.value.toLowerCase());
      }}></input>
      
  
      <span className="search_img" onClick={srch_clck}></span>
       
     </div>
       */}
        
        <div className="hedr_list">
          <ul className="list">
        <li className="link"> Online Status{isOnline?"🟢":"🔴"} </li>
        <li><Link to={"/groceries"} className="link">Groceries</Link></li>
            <li><Link to={"/"} className="link">Home</Link></li>
            <li><Link to={"/About"} className="link">About Us</Link></li>
            <li><Link to={"/Contact"} className="link">Contact Us</Link></li>
            <li className="link">Cart</li>
            <li className="lgn-btn" onClick={()=>{
             setbtnState( btnState=="Login"?"LogOut":"Login")
            }}>{btnState}</li>
          </ul>
        </div>
      </div>
    );
  };