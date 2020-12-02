import React from "react";
import "./App.css";
import List from "./composition/List";
import Card from "./composition/Card";

function App(props) {
  return (
    <main className="App">
      <header>
        <h1>{/* content goes here */}</h1>
      </header>
      <div className="App-list"></div>
    </main>
  );
}

export default App;
