import React from "react";
import "../Styles/App.css";
import List from "./List";
import STORE from "../../STORE";

const newRandomCard = () => {
  const id =
    Math.random().toString(36).substring(2, 4) +
    Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: "lorem ipsum",
  };
};

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
      key === keyToOmit ? newObj : { ...newObj, [key]: value },
    {}
  );
}

// this component will contain the state for the application because it is the lowest common ancestor that can read and update state
class App extends React.Component {
  //initialize state for App component using test data
  state = {
    store: STORE,
  };

  // DON'T FORGET TO USE ARROW FUNCTIONS SO WE AVOID UNDEFINED ERRORS
  // this function will handle the delete callback prop
  handleDeleteCard = (cardId) => {
    const { lists, allCards } = this.state.store;

    // create a new array of the list using a map array method
    const newLists = lists.map((list) => ({
      ...list,
      cardIds: list.cardIds.filter((id) => id !== cardId),
    }));

    // create a new array of the cards minus the deleted card using the omit function
    const newCards = omit(allCards, cardId);

    console.log("delete clicked");
    this.setState({
      store: {
        lists: newLists,
        allCards: newCards,
      },
    });
  };

  // this function will handle the add callback prop
  handleAddCard = (listId) => {
    // create a new card using the provided newRandomCard()
    const newCard = newRandomCard();

    // i'm unsure exactly what this code here is doing
    const newLists = this.state.store.lists.map((list) => {
      if (list.id === listId) {
        return {
          ...list,
          cardIds: [...list.cardIds, newCard.id],
        };
      }
      return list;
    });

    this.setState({
      store: {
        lists: newLists,
        allCards: {
          ...this.state.store.allCards,
          [newCard.id]: newCard,
        },
      },
    });
  };

  render() {
    // use object destructuing to access the current state
    const { store } = this.state;

    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {store.lists.map((list) => (
            <List
              key={list.id}
              id={list.id}
              header={list.header}
              cards={list.cardIds.map((id) => store.allCards[id])}
              onClickDelete={this.handleDeleteCard}
              onClickAdd={this.handleAddCard}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
