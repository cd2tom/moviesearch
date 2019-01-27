const APIKEY = process.env.KEY;
const APIPATH = "https://api.themoviedb.org/3";

export function fetchSearch(queryValue, pageNumber) {
  const path = `${APIPATH}/search/movie?query=${queryValue}&api_key=${APIKEY}&page=${pageNumber}`;
  return fetch(path)
    .then(response => {
      if (response.status !== 200) return false;
      return response.json();
    })
    .then(parsed => {
      const totalPages = parsed.total_pages;
      const results = parsed.results;
      return { results, pageNumber, totalPages };
    });
}

export function generateBgUrl(posterPath) {
  const base = `https://image.tmdb.org/t/p/original`;
  return `${base}${posterPath}`;
}

export function getMovie(id) {
  const path = `${APIPATH}/movie/${id}?api_key=${APIKEY}`;
  return fetch(path)
    .then(response => {
      if (response.status !== 200) return false;
      return response.json();
    })
    .then(parsed => {
      return parsed;
    });
}
