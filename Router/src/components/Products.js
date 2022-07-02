import { Link } from "react-router-dom";

export const Product = function () {
  return (
    <section>
      <h1>The Product Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">A Book </Link>
        </li>
        <li>
          <Link to="/products/p2">Laptop </Link>
        </li>
        <li>
          <Link to="/products/p3">IPhone </Link>
        </li>
      </ul>
    </section>
  );
};
