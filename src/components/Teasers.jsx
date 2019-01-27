import React from "react";
import { generateBgUrl, getMovie } from "../utils/movieDB";

export default function Teasers({ results, setModalResult }) {
  function handleSetModalResult(id) {
    getMovie(id).then(result => {
      if (result) {
        setModalResult(result);
      }
    });
  }

  return (
    <div className="teasers">
      {results.map((result, i) => {
        return (
          <article key={`${i}${result.title}`} className="teaser">
            <div
              style={{
                backgroundImage: `url('${generateBgUrl(result.poster_path)}')`
              }}
              className="teaser__img"
            />
            <div className="teaser__content">
              <p className="teaser__body">
                <b>{result.title}</b>
                <br />
                <small>{result.release_date}</small>
                <br />
                <span>
                  {result.vote_average}
                  /10
                </span>
              </p>
              <div
                className="btn"
                onClick={() => handleSetModalResult(result.id)}
              >
                View More
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
