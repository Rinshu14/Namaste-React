import { useState,useEffect } from "react";

export default SeachBar=({srch_clck})=>{

  

    let [srch_strng,setSrchStrng]=useState("");
   
let searchClicked=(srch_strng)=>{
   srch_clck(srch_strng);
}
    return (
        <div className="search">
  
        <input className="search_bar" type="text" placeholder="Search" onChange={(event)=>{
         
        setSrchStrng(event.target.value.toLowerCase())
         searchClicked(event.target.value.toLowerCase());
       }}></input>
       
   
       <span className="search_img" onClick={()=>searchClicked(srch_strng)}></span>
        
      </div>
    )
}