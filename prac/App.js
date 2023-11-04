import React ,{useEffect, useState}from "react"
import ReactDom from "react-dom/client";

let User=()=>{

    let[user,setUser]=useState("riya");

    // useEffect(async ()=>{
    //     let api_rspn = await fetch("https://api.github.com/users/akshaymarch7");
    // let data = await api_rspn.json();
    // console.log(data);
    

    // return ()=>{console.log("from return")}
    // })
    return <p>HIIIII</p>


}

const Btn=()=>{
    const[isUser,setIsUser]=useState(true)

    return <div>
        <button onClick={()=>{
            (isUser)?setIsUser(false):setIsUser(true);
            console.log("btn click called")
        }}>toggele</button>
        {(isUser)?<User/>:<></>}
    </div>
}
         
let root=ReactDom.createRoot(document.querySelector("#root"))
root.render(<Btn/>)