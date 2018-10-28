import React, { useState } from "react";
import { fetchSearch } from "../utils/movieDB";
import { Loader } from "./Loader";
import { Teasers } from "./Teasers";
import { Pagination } from "./Pagination";

const Home = () => {
  const [queryValue, setQueryValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [requestMade, setRequestMade] = useState(false);
  const [requestData, setResults] = useState({
    results: [],
    pageNumber: 1,
    totalPages: 1
  });

  function handleSetQueryValue(e) {
    setQueryValue(e.target.value);
  }

  function handleSubmitQuery(e) {
    e.preventDefault();
    submitQuery(requestData.pageNumber);
  }

  function handlePageClick(pageNumber) {
    // window.scrollTo({
    //   top: 0,
    //   behavior: "smooth"
    // });
    submitQuery(pageNumber);
  }

  async function submitQuery(pageNumber) {
    setLoading(true);
    setRequestMade(true);
    const fetchedResults = await fetchSearch(queryValue, pageNumber);
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
      {loading && <Loader />}
      {!loading && <Teasers results={requestData.results} />}
      {requestMade && (
        <Pagination
          currentPageNumber={requestData.pageNumber}
          totalPages={requestData.totalPages}
          handlePageClick={handlePageClick}
        />
      )}
    </div>
  );
};

export { Home };
