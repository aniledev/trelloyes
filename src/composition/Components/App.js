import React, { Component } from "react";
import "./App.css";
import List from "./List";

// WHAT EXACTLY IS A CLASS AND HOW DOES IT FUNCTION?
class App extends Component {
  static defaultProps = {
    STORE: {
      lists: [],
      allCards: {},
    },
  };

  render() {
    const { STORE } = this.props;
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>

        <div className="App-list">
          {STORE.lists.map((list) => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map((id) => STORE.allCards[id])}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
