import * as React from "react";
import { observer } from "mobx-react"
import query from "../stores/query"
import Loader from "./Loader"

class Home extends React.Component<any> {
  render() {
    return (
      <div>
        <h1 style={{ color: 'white', textAlign: 'center', marginTop: 0 }}>
          Movie Searcher
        </h1>
        <div style={{ textAlign: 'center' }}>
          <input type="text" onChange={query.setSearch} />
          <button onClick={query.startSearch}>Search</button>
        </div>
        { query.loading ? <Loader /> : undefined}
        {
          query.results.map(result => {
            return(
              <article>
                <p>
                  <b>{result.title}</b>
                  <br/>
                  {result.overview}
                </p>
              </article>
            )
          })
        }
      </div>
    )
  }
}

export default observer(Home)