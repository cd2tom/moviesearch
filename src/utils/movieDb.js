const APIKEY = require("../config/application.yml").KEY;
const APIPATH = "https://api.themoviedb.org/3";

export async function fetchSearch(queryValue, pageNumber) {
  const path = `${APIPATH}/search/movie?query=${queryValue}&api_key=${APIKEY}&page=${pageNumber}`;
  const response = await fetch(path);

  if (response.status !== 200) return false;

  const parsed = await response.json();
  const totalPages = parsed.total_pages;
  const results = parsed.results;

  return { results, pageNumber, totalPages };
}

export function generateBgUrl(posterPath) {
  const base = `https://image.tmdb.org/t/p/original`;
  return `${base}${posterPath}`;
}
