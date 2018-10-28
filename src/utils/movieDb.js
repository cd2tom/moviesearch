const APIKEY = require("../config/application.yml").KEY;
const APIPATH = "https://api.themoviedb.org/3";

export async function startSearch(queryValue) {
  const response = await fetchSearch(queryValue, []);
  return response;
}

export async function fetchSearch(queryValue, results, page = 1) {
  const path = `${APIPATH}/search/movie?query=${queryValue}&api_key=${APIKEY}&page=${page}`;
  const response = await fetch(path);

  if (response.status !== 200) return false;

  const parsed = await response.json();
  results.push(...parsed.results);

  if (parsed.total_pages !== page) {
    const pageResults = await fetchSearch(queryValue, results, page + 1);
    results.push(...pageResults);
  }

  return results;
}

export function generateBgUrl(posterPath) {
  const base = `https://image.tmdb.org/t/p/original`;
  return `${base}${posterPath}`;
}
