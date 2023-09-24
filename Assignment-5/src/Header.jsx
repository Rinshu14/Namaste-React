import { logo_img } from "../utils/Constants";
import { useState } from "react";

export default Header = ({searchClicked}) => {

    let [srch_strng,setSrchStrng]=useState("");
let srch_clck=()=>{
    searchClicked(srch_strng);
}

    return (
      <div className="header">
        <img
          className="logo_img"
          src={logo_img}
        />
     <div className="search">
  
       <input className="search_bar" type="text" placeholder="Search" onChange={(event)=>{
        
        setSrchStrng(event.target.value.toLowerCase())
        searchClicked(event.target.value.toLowerCase());
      }}></input>
      
  
      <span className="search_img" onClick={srch_clck}></span>
       
     </div>
      
        
        <div className="hedr_list">
          <ul className="list">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };