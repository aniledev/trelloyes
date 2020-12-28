import React from "react";
import ReactDOM from "react-dom";
import App from "../src/composition/Components/App";
import "../src/composition/Styles/index.css";
import STORE from "./STORE";

ReactDOM.render(<App STORE={STORE} />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
