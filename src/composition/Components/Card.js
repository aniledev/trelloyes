import React from "react";
import "./Card.css";

// create a function component called Card
// define className prop
// pass in props.title and props.content into function component

function Card(props) {
  return (
    <div className="Card">
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
}

export default Card;
