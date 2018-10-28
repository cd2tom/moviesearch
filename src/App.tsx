import * as React from "react";

import AppPack from "./AppPack";
import "./css/normalize.scss";
import "./css/core.scss";

export default class App extends React.Component<any> {
  render() {
    return (
      <div>
        <div className="main">
          <AppPack />
        </div>
      </div>
    );
  }
}
