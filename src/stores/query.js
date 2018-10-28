const APIKEY = require("../config/application.yml").KEY;
const APIPATH = "https://api.themoviedb.org/3";

class Query {
  search = "";
  errored = false;
  loading = false;
  results = [];

  setSearch(event) {
    const value = event.target.value;
    this.search = value;
  }

  async startSearch(e) {
    e.preventDefault();
    this.resetSearch();
    this.loading = true;
    const response = await fetchSearch(this.search, this.results);
    if (!response) this.errored = true;
    this.loading = false;
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

async function fetchSearch(search, results, page = 1) {
  const path = `${APIPATH}/search/movie?query=${search}&api_key=${APIKEY}&page=${page}`;
  const response = await fetch(path);

  if (response.status !== 200) return false;

  const parsed = await response.json();
  results.push(...parsed.results);

  if (parsed.total_pages !== page) {
    await fetchSearch(search, results, page + 1);
  }
}

const query = new Query();
export default query;
window.query = query;
