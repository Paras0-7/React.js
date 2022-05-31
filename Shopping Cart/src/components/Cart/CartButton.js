import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
const CartButton = (props) => {
  const dispatch = useDispatch();

  const totalQuantity = useSelector(function (state) {
    return state.cart.totalQuantity;
  });
  const toggleCartHandler = function () {
    dispatch(uiActions.toggleCart());
  };
  return (
    <button onClick={toggleCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
