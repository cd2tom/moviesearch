import React, { useState } from "react";
import { startSearch } from "../utils/movieDB";
import { Loader } from "./Loader";
import { Teasers } from "./Teasers";

const Home = () => {
  const [queryValue, setQueryValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  function handleSetQueryValue(e) {
    setQueryValue(e.target.value);
  }

  async function handleSubmitQuery(e) {
    e.preventDefault();
    setLoading(true);
    const fetchedResults = await startSearch(queryValue);
    setLoading(false);
    setResults(fetchedResults);
  }

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <form onSubmit={handleSubmitQuery}>
          <input
            type="text"
            value={queryValue}
            onChange={handleSetQueryValue}
          />
          <button>Search</button>
        </form>
      </div>
      {loading ? <Loader /> : undefined}
      <Teasers results={results} />
    </div>
  );
};

export { Home };
