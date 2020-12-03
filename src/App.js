import React, { Component } from "react";
import "./App.css";
import STORE from "./store";
import List from "./composition/List";
import Card from "./composition/Card";

// WHAT EXACTLY IS A CLASS AND HOW DOES IT FUNCTION?
class App extends Component {
  // default props before render statement. HOW IS STATIC FUNCTIONING IN THIS STATEMENT?
  static defaultProps = {
    STORE: {
      lists: [],
      allCards: {},
    },
  };
  // the render function
  render() {
    const { STORE } = this.props;
    // JSX elements that are returned from the function
    return (
      <main className="App">
        <header>
          <h1>Trelloyes</h1>
        </header>
        <div className="App-list">
          {STORE.lists.map((list) => (
            <List
              key={list.id}
              header={list.header}
              // MAKE SURE THAT YOU UNDERSTAND EACH PIECE OF THIS MAP FUNCTION
              cards={list.cardIds.map((id) => STORE.allCards[id])}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
