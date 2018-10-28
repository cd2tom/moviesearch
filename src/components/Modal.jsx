import React from "react";
import { generateBgUrl, getMovie } from "../utils/movieDB";

const Modal = ({ result, setModalResult }) => {
  function handleClearModalResult() {
    setModalResult(undefined);
  }

  return (
    <div
      className={`modal ${result ? "modal--active" : undefined}`}
      onClick={handleClearModalResult}
    >
      <article className="modal__content" onClick={e => e.stopPropagation()}>
        <div className="modal__close btn" onClick={handleClearModalResult}>
          x
        </div>
        {result && (
          <React.Fragment>
            <div
              style={{
                backgroundImage: `url('${generateBgUrl(result.poster_path)}')`
              }}
              className="modal__img"
            />
            <div className="modal__body">
              <h3>
                {result.title}
                <br />
                <small>{result.tagline}</small>
              </h3>
              <p>{result.overview}</p>
            </div>
          </React.Fragment>
        )}
      </article>
    </div>
  );
};

export { Modal };
