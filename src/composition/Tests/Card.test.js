// make React available
import React from "react";

// make ReactDOM available
import ReactDOM from "react-dom";

// make reat-test-tender avaialble for the snapshot tests
import renderer from "react-test-renderer";

// make the card component availble to this file so that it can be tested
import Card from "../Components/Card";

//WRITE AT LEAST ONE SMOKE CASE TO ENSURE THAT THE TEST RENDERS IN THE FIRST PLACE
it("renders properly withouth crashing", () => {
  // first create a DOM element to render the componet into
  const div = document.createElement("div");
  // render the component, this is the actual test. it something is wrong it will fail here
  ReactDOM.render(<Card />, div);
  // clean up the code
  ReactDOM.unmountComponentAtNode(div);
});

// WRITE AT LEAST ONE SNAPSHOT TEST FOR THE LIST COMPONENT TO COMPARE THE ui TO A SAVED VERSION OF THE UI AND INFORMS YOU IN T UI CHANGES AT ALL
// 1. render teh component and create a human readable JSON file
it("renders the UI as expected", () => {
  const tree = renderer
    .create(
      <Card
        key={Card.card.id}
        title={Card.card.title}
        content={Card.card.content}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
// 2. compare the rendered component to a saved version of the component

// write at least one snpashot test for the list componen
// what would be the actual testing component, i'm unsure as to what tests i'd even be making for an app like this
