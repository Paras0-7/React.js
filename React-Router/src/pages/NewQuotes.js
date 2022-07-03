import QuoteForm from "./../components/quotes/QuoteForm";

export const NewQuotes = function () {
  const addQuoteHandler = function (quoteData) {
    console.log(quoteData);
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};
