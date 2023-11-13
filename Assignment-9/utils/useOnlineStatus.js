import { useState,useEffect } from "react"


export default useOnlineStatus=()=>{
const[status,setStatus]=useState(true)

useEffect(()=>{

    window.addEventListener('online',()=>{
        console.log("is online")
        setStatus(true);
    })

    window.addEventListener('offline',()=>{
        console.log("is offline")
        setStatus(false);
    })

},[])



    return status
}