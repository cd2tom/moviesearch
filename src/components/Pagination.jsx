import React from "react";

export default function Pagination({
  currentPageNumber,
  totalPages,
  handlePageClick
}) {
  return (
    <div className="pagination">
      {Array(totalPages)
        .fill()
        .map((_, i) => (
          <span
            key={i}
            className={`pagination__link ${
              currentPageNumber === i + 1
                ? "pagination__link--active"
                : undefined
            }`}
            onClick={() => handlePageClick(i + 1)}
          >
            {i + 1}
          </span>
        ))}
    </div>
  );
}
