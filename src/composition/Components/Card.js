import React from "react";
import "../Styles/Card.css";

// create a function component called Card
// define className prop
// pass in props.title and props.content into function component

export default function Card(props) {
  return (
    <div className="Card">
      <h3>{props.title}</h3>
      {/* Use the id of the props that are passed in to access the individual card and pass it back up the component tree using a callback prop function */}
      <button onClick={() => props.onClickDelete(props.id)} type="button">
        delete
      </button>
      <p>{props.content}</p>
    </div>
  );
}

// WHAT EXACTLY DOES THIS LINE DO?????
Card.propTypes = {
  onClickDelete: () => {},
};
