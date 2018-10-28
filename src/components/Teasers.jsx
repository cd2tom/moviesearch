import React from "react";
import { generateBgUrl } from "../utils/movieDB";

const Teasers = ({ results }) => (
  <div style={{ padding: 32 }}>
    {results.map((result, i) => {
      return (
        <article key={`${i}${result.title}`} className="teaser">
          <div
            style={{
              backgroundImage: `url('${generateBgUrl(result.poster_path)}')`
            }}
            className="teaser__img"
          />
          <p className="teaser__body">
            <b>{result.title}</b>
            <br />
            {result.overview}
          </p>
          <div className="btn">View More</div>
        </article>
      );
    })}
  </div>
);

export { Teasers };
