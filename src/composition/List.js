import React from "react";
import "./List.css";

// create function component called List
function List(props) {
  return (
    <section className="List">
      <header>{props.header}</header>
      <div className="List-cards">{props.cards}</div>
    </section>
  );
}
