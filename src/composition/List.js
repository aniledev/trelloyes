import React from "react";
import Card from "../composition/Card";
import "./List.css";

function List(props) {
  return (
    <section className="List">
      <header className="List-header">
        {/* WHAT EXACTLY IS PROPS.HEADER REFFERING TO.  */}
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {/* WHAT EXACTLY IS PROPS.CARDS REFFERING TO. I UNDERSTAND THE MAP FUNCTION BUT DON'T KNOW WHAT THIS REFERENCE IS */}
        {props.cards.map((card) => (
          <Card key={card.id} title={card.title} content={card.content} />
        ))}
      </div>
    </section>
  );
}

export default List;
