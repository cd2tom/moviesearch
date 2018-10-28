import React, { useState } from "react";
import query from "../stores/query";
import { Loader } from "./Loader";
import { Teasers } from "./Teasers";

const Home = () => {
  const [queryValue, setQueryValue] = useState("");

  function handleSetQueryValue(e) {
    setQueryValue(e.target.value);
  }

  return (
    <div>
      <h1 style={{ color: "white", textAlign: "center", marginTop: 0 }}>
        Movie Searcher
      </h1>
      <div style={{ textAlign: "center" }}>
        <form onSubmit={query.startSearch}>
          <input
            type="text"
            value={queryValue}
            onChange={handleSetQueryValue}
          />
          <button>Search</button>
        </form>
      </div>
      {query.loading ? <Loader /> : undefined}
      <Teasers />
    </div>
  );
};

export { Home };
