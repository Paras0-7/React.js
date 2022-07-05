import { useParams, Route, Routes } from "react-router-dom";
import Comments from "./../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
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
export const QuoteDetails = function () {
  const params = useParams();
  const quote = quotes.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return <p>No Quote Found</p>;
  }
  return (
    <div>
      <HighlightedQuote text={quote.text} author={quote.author} />

      <Routes>
        <Route
          path={`/quotes/${params.quoteId}/comments`}
          element={<Comments />}
        ></Route>
      </Routes>
    </div>
  );
};
