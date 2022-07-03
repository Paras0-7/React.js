import QuoteList from "./../components/quotes/QuoteList";
const quotes = [
  {
    id: "q1",
    author: "Max",
    text: "Learning React is fun!",
  },

  {
    id: "q2",
    author: "Max Millian",
    text: "Learning React is great!",
  },
];
export const AllQuotes = function () {
  return <QuoteList quotes={quotes} />;
};
