import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store";
const Header = () => {
  const isAuthenticated = useSelector(function (state) {
    return state.auth.isAuthenticated;
  });
  const dispatch = useDispatch();
  const onLogout = function () {
    dispatch(authActions.logout());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          {isAuthenticated && (
            <li>
              <a href="/">My Products</a>
            </li>
          )}
          {isAuthenticated && (
            <li>
              <a href="/">My Sales</a>
            </li>
          )}
          <li>
            <button onClick={onLogout}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
