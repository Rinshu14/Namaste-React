import { useSelector } from "react-redux";
import RestMenuDetails from "./RestMenuDetails";

export default Cart = () => {
  let cartItems = useSelector((store) => {
    return store.cart.items;
  });

  return (
    <>
    <h1>Cart</h1>
      {cartItems.map((restaurant, index) => {
        return <RestMenuDetails key={restaurant.id} restaurant={restaurant} />;
      })}
    </>
  );
};
