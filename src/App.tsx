import * as React from 'react';

import AppPack from "./AppPack"
import { normalize, core } from "./css/index"

export default class App extends React.Component<any> {
  render() {
    return (
      <div>
        <style>
          {normalize}
          {core}
        </style>
        <div className="main">
          <AppPack />
        </div>
      </div>
    )
  }
}