import QuoteForm from "./../components/quotes/QuoteForm";
import { useNavigate } from "react-router-dom";
export const NewQuotes = function () {
  const navigate = useNavigate();
  const addQuoteHandler = function (quoteData) {
    console.log(quoteData);
    navigate("/quotes");
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};
