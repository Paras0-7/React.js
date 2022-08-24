import { useState, useRef, useCallback } from "react";
// import { faker } from "@faker-js/faker";

import { useBookSearch } from "./useBookSearch";

function App() {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const observer = useRef();
  const { books, hasMore, loading, error } = useBookSearch(query, pageNumber);
  const lastBookElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          console.log("visible");
          setPageNumber((prev) => prev + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  function handleSearch(e) {
    setQuery(e.target.value);
    setPageNumber(1);
  }
  return (
    <div className="App">
      <input type="text" value={query} onChange={handleSearch} />
      {books.map((book, index) => {
        if (books.length === index + 1)
          return (
            <div ref={lastBookElementRef} key={book}>
              {book}
            </div>
          );
        return <div key={book}>{book}</div>;
      })}
      <div>{loading && "Loading..."}</div>
      <div>{error && "Error"}</div>
    </div>
  );
}

export default App;

// const [people, setPeople] = useState([]);
//   useEffect(function () {
//     setPeople(
//       [...Array(100).keys()].map((key) => {
//         return {
//           id: key,
//           name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//           bio: faker.lorem.lines(Math.random() * 100),
//         };
//       })
//     );
//   }, []);
//   return (
//     <div className="App">
//       <ul>
//         {people.map((person) => (
//           <li key={person.id}>
//             <h2>{person.name}</h2>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
