import React from "react";
import Login from "./Login";
import Header from "./Header";
import Browse from "./Browse";
import ErrorPage from "./ErrorPage";
import SignUp from "./SignUp";
import { createBrowserRouter,RouterProvider } from "react-router-dom";




const Body = () => {

const appRouter=createBrowserRouter([
    {
       path:"/",
      element:<Login/>,
      errorElement:<ErrorPage/>,
      children:[
        {
            path:"/browse",
            element:<Browse/>

        },
        {
            path:"/signup",
            element:<SignUp/>

        },

      ]
    }

])

  return (
    

    <div >
        <Header/>
    <RouterProvider router={appRouter}/>
    </div>
   
  );
};

export default Body;
