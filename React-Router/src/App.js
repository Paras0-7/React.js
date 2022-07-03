import { Route, Switch } from "react-router-dom";
import { AllQuotes } from "./pages/AllQuotes";
import { NewQuotes } from "./pages/NewQuotes";
import { QuoteDetails } from "./pages/QuoteDetails";

function App() {
  return (
    <Switch>
      <Route path="/quotes" exact>
        <AllQuotes />
      </Route>
      <Route path="/quotes/:quoteId" exact>
        <QuoteDetails />
      </Route>
      <Route path="/new-quote">
        <NewQuotes />
      </Route>
    </Switch>
  );
}

export default App;
