import React from "react";
import query from "../stores/query";

const Teasers = () => (
  <div style={{ padding: 32 }}>
    {query.results.map((result, i) => {
      return (
        <article
          key={`${i}${result.title}`}
          style={{
            display: `flex`,
            alignItems: `center`,
            marginBottom: i === query.results.length - 1 ? 0 : 16
          }}
        >
          <div
            style={{
              backgroundImage: `url('${query.generateBgUrl(
                result.poster_path
              )}')`,
              backgroundSize: `cover`,
              height: 150,
              width: 100
            }}
          />
          <p style={{ flex: 1, marginLeft: 16 }}>
            <b>{result.title}</b>
            <br />
            {result.overview}
          </p>
        </article>
      );
    })}
  </div>
);

export { Teasers };
