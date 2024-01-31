import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../src/Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../Redux/Redux";
import { BrowserRouter } from "react-router-dom";

// const appRouter = createBrowserRouter([
//     {
//       path: "/",
//       element: <AppLayout />,
//       errorElement: <ErrorPage />,
//       children: [
//         {
//           path: "/",
//           element: <Body />,
//         },
//         {
//           path: "/about",
//           element: <About />,
//         },
//         {
//           path: "/contact",
//           element: <Contact />,
//         },
//         {
//           path: "/restaurant",
//           element: <RestaurantPage />,
//         },
//         {
//           path: "/Cart",
//           element: <Cart />,
//         },
//         {
//           path: "/groceries",
//           element: (
//             <Suspense fallback={<h1>hey am still loading</h1>}>
//               <Groceries />
//             </Suspense>
//           ),
//         },
//       ],
//     },
//   ]);
// let storeValue={cart:{items:[]}};

test("should load header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const li = screen.getAllByRole("listitem");

  expect(li.length).toBe(7);
});

test("should click login button",()=>{
   render( <BrowserRouter>
   <Provider store={appStore}>
<Header/>
   </Provider>
   </BrowserRouter>) 
const gg=screen.getByText("Login")
const loginLi=screen.getAllByRole("listitem")

fireEvent.click(loginLi[6]);
const loginLiafterClick=screen.getAllByRole("listitem")

console.log(loginLiafterClick[6])

})

test("should click login button",()=>{
    render( <BrowserRouter>
    <Provider store={appStore}>
 <Header/>
    </Provider>
    </BrowserRouter>) 
 const loginBtn=screen.getByText("Login")
 
 
 fireEvent.click(loginBtn);
 const logOutBtn=screen.getByText("LogOut")
 expect(logOutBtn).toBeInTheDocument()
 
 })

 test("should click login button",()=>{
    render( <BrowserRouter>
    <Provider store={appStore}>
 <Header/>
    </Provider>
    </BrowserRouter>) 
 const cartBtn=screen.getByText(/Cart/)
 

 expect(cartBtn).toBeInTheDocument()
 
 })



 
