import RestMenuDetails from "../src/RestMenuDetails";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import restMenuDeatilsMockData from "../utils/restMenuDeatilsMockdata";
import { Provider } from "react-redux";
import appStore from "../Redux/Redux";
import Header from "../src/Header";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

test("should load restCard", () => {
  render(
    <Provider store={appStore}>
      <RestMenuDetails restaurant={restMenuDeatilsMockData} />
    </Provider>
  );
  let addBtn = screen.getByText("Add+");


  fireEvent.click(addBtn);
  fireEvent.click(addBtn);
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  let cartItem= screen.getByText("Cart - 2")

  expect(cartItem).toBeInTheDocument()
});
