import * as React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import AppPack from "./AppPack"
import Home from "./components/Home"
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