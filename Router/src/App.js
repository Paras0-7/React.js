import { Route, Switch } from "react-router-dom";
import { MainHeader } from "./components/MainHeader";
import { ProductDetails } from "./components/ProductDetails";
import { Product } from "./components/Products";
import { Welcome } from "./components/Welcome";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Product />
          </Route>
          <Route path="/products/:productName">
            <ProductDetails />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
