import React from "react";
import Card from "./Card";
import "../Styles/List.css";

export default function List(props) {
  return (
    <section className="List">
      <header className="List-header">
        {/* props are passed in from the App component */}
        {/* pass in onClickDelete callback prop so it gets passed back up to the App component */}
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {props.cards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            content={card.content}
            onClickDelete={props.onClickDelete}
          />
        ))}
      </div>
    </section>
  );
}

List.defaultProps = {
  onClickAdd: () => {},
};
