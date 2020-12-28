import React from "react";
import "../Styles/App.css";
import List from "./List";

// this component will contain the state for the application because it is the lowest common ancestor that can read and update state

class App extends React.Component {
  //initialize state for App component using test data
  state = {
    lists: [
      {
        id: "1",
        header: "First list",
        cardIds: ["a", "b", "e", "f", "g", "j", "l", "m"],
      },
      {
        id: "2",
        header: "Second list",
        cardIds: ["b", "c", "d", "f", "h", "i", "k"],
      },
      {
        id: "3",
        header: "Third list",
        cardIds: [
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
          "g",
          "h",
          "i",
          "j",
          "k",
          "l",
          "m",
        ],
      },
      {
        id: "4",
        header: "Fourth list",
        cardIds: ["l", "m"],
      },
    ],
    allCards: {
      a: { id: "a", title: "First card", content: "lorem ipsum" },
      b: { id: "b", title: "Second card", content: "lorem ipsum" },
      c: { id: "c", title: "Third card", content: "lorem ipsum" },
      d: { id: "d", title: "Fourth card", content: "lorem ipsum" },
      e: { id: "e", title: "Fifth card", content: "lorem ipsum" },
      f: { id: "f", title: "Sixth card", content: "lorem ipsum" },
      g: { id: "g", title: "Seventh card", content: "lorem ipsum" },
      h: { id: "h", title: "Eighth card", content: "lorem ipsum" },
      i: { id: "i", title: "Ninth card", content: "lorem ipsum" },
      j: { id: "j", title: "Tenth card", content: "lorem ipsum" },
      k: { id: "k", title: "Eleventh card", content: "lorem ipsum" },
      l: { id: "l", title: "Twelfth card", content: "lorem ipsum" },
      m: { id: "m", title: "Thirteenth card", content: "lorem ipsum" },
    },
  };

  static defaultProps = {
    STORE: {
      lists: [],
      allCards: {},
    },
  };

  // DON'T FORGET TO USE ARROW FUNCTIONS SO WE AVOID UNDEFINED ERRORS
  // this function will handle the delete callback prop
  handleDeleteCard = () => {
    console.log("handle delete clicked");
  };
  // this function will handle the add callback prop
  handleAddCard = () => {
    console.log("handle add clicked");
  };

  render() {
    // use obejct destructuring to access this.state keys
    const { lists, allCards } = this.state;
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>

        <div className="App-list">
          {lists.map((list) => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map((id) => allCards[id])}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
