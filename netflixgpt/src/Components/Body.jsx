import React, { useEffect } from "react";
import Login from "./Login";
import Header from "./Header";
import Browse from "./Browse";
import ErrorPage from "./ErrorPage";
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";


const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

 



  return (
    <div className="h-[100vh]">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
