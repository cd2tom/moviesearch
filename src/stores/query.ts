import { observable, action } from "mobx"

const APIKEY = require('../config/application.yml').KEY
const APIPATH = 'https://api.themoviedb.org/3'

class Query {

  @observable search = ''
  @observable errored = false
  @observable results:any = []

  @action.bound
  setSearch(event:any) {
    const value = event.target.value
    this.search = value
  }

  @action.bound
  async startSearch() {
    this.errored = false
    this.results = []
    const response = await fetchSearch(this.search)
    if (!response) { 
      this.errored = true
      return
    }
    this.results = response
  }

}

async function fetchSearch(search:string, page=1) {
  const path = `${APIPATH}/search/movie?query=${search}&api_key=${APIKEY}&page=${page}`
  const response = await fetch(path)

  if (response.status !== 200) return false

  const parsed = await response.json()
  const results = parsed.results

  if (parsed.total_pages !== page){
    const extraResults = await fetchSearch(search, page+1)
    results.push(...extraResults)
  }

  return results
}

const query = new Query()
export default query
// @ts-ignore
window.query = query