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
          <form onSubmit={query.startSearch}>
            <input type="text" onChange={query.setSearch} />
            <button>Search</button>
          </form>
        </div>
        { query.loading ? <Loader /> : undefined}
        {
          query.results.map((result:any, i:number) => {
            return(
              <article style={{ display: `flex`, alignItems: `center`, }}>
                <div
                  style={{
                    backgroundImage: `url('${query.generateBgUrl(result.poster_path)}')`,
                    backgroundSize: `cover`,
                    height: 150,
                    width: 100,
                    marginBottom: i === query.results.length-1 ? 0 : 16
                  }}
                />
                <p style={{ flex: 1, marginLeft: 16 }}>
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