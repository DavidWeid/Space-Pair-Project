import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// This is where we use dotenv
require("dotenv").config();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
