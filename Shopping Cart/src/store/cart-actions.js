import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";
export const sendCartData = function (cart) {
  return async function (dispatch) {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending ...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
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
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sending cart data successfully!",
        })
      );
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};

export const fetchCartData = function () {
  return async function (dispatch) {
    const fetchData = async function () {
      const response = await fetch(
        "https://reac-http-84c2c-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data");
      }

      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};
