import { observable, action } from "mobx"

class Query {

  @observable search?:string

  @action.bound
  setSearch(event:any) {
    const value = event.target.value
    this.search = value
  }

  @action.bound
  startSearch() {
    
  }

}

const query = new Query()
export default query
// @ts-ignore
window.query = query