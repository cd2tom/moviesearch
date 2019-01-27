import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

if (process.env.environment !== "production") {
  require("dotenv").config();
}

ReactDOM.render(<App />, document.getElementById("root"));
