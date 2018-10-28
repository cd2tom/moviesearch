import React from "react";
import query from "../stores/query";
import { Loader } from "./Loader";
import { Teasers } from "./Teasers";

const Home = () => (
  <div>
    <h1 style={{ color: "white", textAlign: "center", marginTop: 0 }}>
      Movie Searcher
    </h1>
    <div style={{ textAlign: "center" }}>
      <form onSubmit={query.startSearch}>
        <input type="text" onChange={query.setSearch} />
        <button>Search</button>
      </form>
    </div>
    {query.loading ? <Loader /> : undefined}
    <Teasers />
  </div>
);

export { Home };
