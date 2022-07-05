import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { AllQuotes } from "./pages/AllQuotes";
import { NewQuotes } from "./pages/NewQuotes";
import { NotFound } from "./pages/NotFound";
import { QuoteDetails } from "./pages/QuoteDetails";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/quotes" element={<AllQuotes />}></Route>
        <Route path="/quotes/:quoteId" element={<QuoteDetails />}></Route>
        <Route path="/new-quote" element={<NewQuotes />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
