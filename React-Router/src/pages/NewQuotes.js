import QuoteForm from "./../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";
export const NewQuotes = function () {
  const history = useHistory();
  const addQuoteHandler = function (quoteData) {
    console.log(quoteData);
    history.push("/quotes");
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};
