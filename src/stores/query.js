const APIKEY = require("../config/application.yml").KEY;
const APIPATH = "https://api.themoviedb.org/3";

class Query {
  search = "";
  errored = false;
  loading = false;
  results = [];

  async startSearch(queryValue) {
    this.resetSearch();
    this.loading = true;
    const response = await fetchSearch(queryValue, []);
    if (!response) this.errored = true;
    this.loading = false;
    return response;
  }

  resetSearch() {
    this.errored = false;
    this.results = [];
  }

  generateBgUrl = posterPath => {
    const base = `https://image.tmdb.org/t/p/original`;
    return `${base}${posterPath}`;
  };
}

async function fetchSearch(queryValue, results, page = 1) {
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

const query = new Query();
export default query;
window.query = query;
