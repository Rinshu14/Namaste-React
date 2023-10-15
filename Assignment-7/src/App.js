import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";

import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";
import RestaurantPage from "./RestaurantPage"
import Login from "./Login"



const AppLayout = () => {
  // const [restList, setRestList] = useState([]);
  // const [filteredList, setFilteredList] = useState(restList);
  // const [isLoading, setIsLoding] = useState(true);


  // let searchClicked = (search_string) => {
  //   let tyt = restList.filter((item) => {
  //     return item.info.name.toLowerCase().includes(search_string);
  //   });

  //   setFilteredList([...tyt]);
  // };

  
    return (
      <div className="appLayout">
        <Header  />
        {/* <Body restaurantsList={filteredList} /> */}
        <Outlet/>
  
      </div>
      // <>
      // <Login/>
      
      // <RestaurantDetails/>
      // <Separator/>
      // <RestMenuDetails/>
      // <RestMenuDetails/>
      // <RestMenuDetails/>
      // <RestMenuDetails/>
      // </>
    );
 
};

const appRouter=createBrowserRouter([
  {
     path:"/",
   element:<AppLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restaurant",
        element:<RestaurantPage/>
      }
    ]
  }
 
 
])






const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<RouterProvider router={appRouter}/>);
