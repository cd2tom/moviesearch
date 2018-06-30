import * as React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home"

export default class AppPack extends React.Component<any> {
  render() {
    return (
      <Router>
        <Route path="/" component={Home} exact />
      </Router>
    )
  }
}