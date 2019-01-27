import React, { useState, useEffect } from "react";
import { fetchSearch } from "../utils/movieDB";
import { Loader } from "./Loader";
import { Teasers } from "./Teasers";
import { Pagination } from "./Pagination";
import { Modal } from "./Modal";

const Home = () => {
  const [queryValue, setQueryValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalResult, setModalResult] = useState(undefined);
  const [requestMade, setRequestMade] = useState(false);
  const [requestData, setResults] = useState({
    results: [],
    pageNumber: 1,
    totalPages: 1
  });

  useEffect(() => {
    let title = "tom's mobie search";
    if (queryValue) {
      title += ` | ${queryValue}`;
    }
    document.title = title;
  });

  function handleSetQueryValue(e) {
    setQueryValue(e.target.value);
  }

  function handleSubmitQuery(e) {
    e.preventDefault();
    setRequestMade(false);
    submitQuery(requestData.pageNumber);
  }

  function handlePageClick(pageNumber) {
    submitQuery(pageNumber);
  }

  function submitQuery(pageNumber) {
    if (!queryValue) return;

    setLoading(true);
    fetchSearch(queryValue, pageNumber).then(fetchedResults => {
      setLoading(false);
      setRequestMade(true);
      if (fetchedResults) setResults(fetchedResults);
    });
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
      {!loading && (
        <Teasers
          results={requestData.results}
          setModalResult={setModalResult}
        />
      )}
      {requestMade && requestData.results.length > 0 && (
        <Pagination
          currentPageNumber={requestData.pageNumber}
          totalPages={requestData.totalPages}
          handlePageClick={handlePageClick}
        />
      )}
      <Modal result={modalResult} setModalResult={setModalResult} />
    </div>
  );
};

export { Home };
