import { observable, action } from "mobx"

const APIKEY = require('../config/application.yml').KEY
const APIPATH = 'https://api.themoviedb.org/3'

class Query {

  @observable search = ''
  @observable errored = false
  @observable loading = false
  @observable results:any = []

  @action.bound
  setSearch(event:any) {
    const value = event.target.value
    this.search = value
  }

  @action.bound
  async startSearch() {
    this.resetSearch()
    this.loading = true
    const response = await fetchSearch(this.search, this.results)
    if (!response) this.errored = true
    this.loading = false
  }

  @action.bound
  resetSearch() {
    this.errored = false
    this.results = []
  }

}

async function fetchSearch(search:string, results:any[], page=1) {
  const path = `${APIPATH}/search/movie?query=${search}&api_key=${APIKEY}&page=${page}`
  const response = await fetch(path)

  if (response.status !== 200) return false

  const parsed = await response.json()
  results.push(...parsed.results)

  if (parsed.total_pages !== page){
    const extraResults = await fetchSearch(search, results, page+1)
  }
}

const query = new Query()
export default query
// @ts-ignore
window.query = query