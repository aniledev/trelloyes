import React from "react";
import Card from "./Card";
import "../Styles/List.css";

export default function List (props){
 

  render() {
    return (
      <section className="List">
        <header className="List-header">
          <h2>{this.props.header}</h2>
        </header>
        <div className="List-cards">
          {this.props.cards.map((card) => (
            <Card key={card.id} title={card.title} content={card.content} />
          ))}
        </div>
      </section>
    );
  }
}
