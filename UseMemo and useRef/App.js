import React from "react"
import ReactDOM from "react-dom/client";
import UseMemoComp from "./UseMemoComp";
import UseRefComp from "./UseRefComp";

let App=()=>{
    return (
        <>
        <UseMemoComp/>
        <UseRefComp/>
        </>
    )

}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App/>)
