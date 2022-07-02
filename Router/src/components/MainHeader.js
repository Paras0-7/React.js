import { Link, NavLink } from "react-router-dom";
import "./MainHeader.css";

export const MainHeader = function () {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <NavLink activeClassName="active" to="/welcome">
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/products">
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
