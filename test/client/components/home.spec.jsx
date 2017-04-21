import React from "react";
import ReactDOM from "react-dom";
import Home from "client/components/home";
import {createStore} from "redux";
import rootReducer from "../../../client/reducers";
import test1 from test1
import test2 from test2

describe("Home", () => {
  let component;
  let container;
  console.log("test from test branch")
  beforeEach(() => {
    container = document.createElement("div");
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
  });

  it("has expected content with deep render", () => {
    const initialState = {
      checkBox: {checked: false},
      number: {value: 999}
    };

    const store = createStore(rootReducer, initialState);

    component = ReactDOM.render(
      <Home store={store}/>,
      container
    );

    expect(component).to.not.be.false;
  });
});
