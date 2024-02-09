import Head from "./Component/Head";
import Body from "./Component/Body";
import { Provider } from "react-redux";
import appStore from "./Redux/ReduxStore";
import { createBrowserRouter } from "react-router-dom";
import WatchPage from "./Component/WatchPage";
import ErrorPage from "./Component/ErrorPage";
import { RouterProvider,  } from "react-router-dom";
import MainContainer from "./Component/MainContainer";

function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <Head />
        <RouterProvider router={appRouter} />
      
      </div>
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Body />,
    children: [
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/",
        element: <MainContainer />,
      },
    ],
  },
]);

export default App;
