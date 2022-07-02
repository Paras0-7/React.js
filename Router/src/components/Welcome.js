import { Route } from "react-router-dom";
import { Product } from "./Products";

export const Welcome = function () {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Route path="/welcome/products2">
        <Product />
      </Route>
    </section>
  );
};
