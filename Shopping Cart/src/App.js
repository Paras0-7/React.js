import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { uiActions } from "./store/ui-slice";
import { Notification } from "./components/UI/Notification";

let isInitial = true;
function App() {
  const dispatch = useDispatch();
  const toggleCart = useSelector(function (state) {
    return state.ui.cartIsVisible;
  });

  const cart = useSelector(function (state) {
    return state.cart;
  });

  const notification = useSelector(function (state) {
    return state.ui.notification;
  });
  useEffect(() => {
    const sendCartData = async function () {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending ...",
          message: "Sending cart data!",
        })
      );
      const response = await fetch(
        "https://reac-http-84c2c-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error!",
            message: "Sending cart data failed!",
          })
        );
      }

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sending cart data successfully!",
        })
      );
    };

    if (isInitial) {
      isInitial = false;
      console.log("Inside");
      return;
    }
    sendCartData().catch((error) => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!!",
          message: "Sending cart data failed!",
        })
      );
    });
  }, [cart, dispatch]);
  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {toggleCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
