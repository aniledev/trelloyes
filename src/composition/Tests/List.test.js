// make React available
import React from "react";
// make the REACTdom available
import ReactDOM from "react-dom";
//make react-renderer available to the file
import renderer from "react-test-renderer";
//make the List component available to this test file so that it can be tested
import List from "../Components/List";
import App from "../Components/App";

// WRITE AT LEAST ONE SMOKE CASE TO ENSURE THAT THE TEST RENDERS IN THE FIRST PLACE
// this is the test case
it("renders without crashing", () => {
  // first create a DOM element to render the component into
  const div = document.createElement("div");
  // render the component, this is the actual test. if something is wrong it will fail here
  ReactDOM.render(<List />, div);
  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});

// WRITE AT LEAST ONE SNAPSHOT TEST FOR THE LIST COMPONENT TO COMPARE THE ui TO A SAVED VERSION OF THE UI AND INFORMS YOU IN T UI CHANGES AT ALL
// 1. render teh component and create a human readable JSON file
it("renders the UI as expected", () => {
  const tree = renderer.create(<List />).toJSON();
  expect(tree).toMatchSnapshot();
});
// 2. compare the rendered component to a saved version of the component

// write at least one snpashot test for the list componen
