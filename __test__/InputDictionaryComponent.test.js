import React from "react";
import { shallow, mount, configure } from "enzyme";
import renderer from "react-test-renderer";
import InputDictionaryComponent from "./../src/components/InputDictionaryComponent.js";
import AddDictionary from "./../src/presentational/AddDictionary.js";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { createStore } from "redux";
import calculatorReducers from "./../src/reducer.js";
import Adapter from "enzyme-adapter-react-15";
import ShallowRenderer from "react-test-renderer/shallow";

configure({ adapter: new Adapter() });

describe(">>>InputDictionaryComponent  +++capturing Snapshot of InputDictionaryComponent", () => {
  const mockStore = configureStore();
  let store;

  it("+++capturing Snapshot of InputDictionaryComponent", () => {
    store = createStore(calculatorReducers);
    const renderedValue = renderer
      .create(
        <Provider store={store}>
          <InputDictionaryComponent />
        </Provider>
      )
      .toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});

//
describe(">>>InputDictionaryComponent +++ testing function --- toggleAddDictionary", () => {
  let store;
  store = createStore(calculatorReducers);
  it("+++ testing toggleAddDictionary return undefined", () => {
    store = createStore(calculatorReducers);
    const renderedValue = renderer
      .create(
        <Provider store={store}>
          <InputDictionaryComponent />
        </Provider>
      )
      .toJSON();

    const handleKeyPress = renderedValue.children[0].props.onKeyPress;
    expect(handleKeyPress("Enter")).toBe(undefined);
    expect(handleKeyPress("blah")).toBe(undefined);
  });

  it("+++ testing autoFocus on the input box is always TRUE", () => {
    store = createStore(calculatorReducers);
    const renderedValue = renderer.create(
      <Provider store={store}>
        <InputDictionaryComponent />
      </Provider>
    ).root;
    const theState = renderedValue._fiber.stateNode.props.store.getState();
    expect(renderedValue.findAllByType("div").length).toBe(3);
    expect(renderedValue.findAllByType("input").length).toBe(1);
  });

  it("+++ testing if the viewDictionary is a string", () => {
    store = createStore(calculatorReducers);
    const renderedValue = renderer.create(
      <Provider store={store}>
        <InputDictionaryComponent />
      </Provider>
    ).root;
    const theState = renderedValue._fiber.stateNode.props.store.getState();
    expect(typeof theState.viewDictionary).toBe("string");
  });

  it("+++ testing if dictionaries are stored in a object", () => {
    store = createStore(calculatorReducers);
    const renderedValue = renderer.create(
      <Provider store={store}>
        <InputDictionaryComponent />
      </Provider>
    ).root;
    const theState = renderedValue._fiber.stateNode.props.store.getState();
    expect(typeof theState.dictionaries).toBe("object");
  });

  it("+++ testing if the test type is a sting", () => {
    store = createStore(calculatorReducers);
    const renderedValue = renderer.create(
      <Provider store={store}>
        <InputDictionaryComponent />
      </Provider>
    ).root;
    const theState = renderedValue._fiber.stateNode.props.store.getState();
    expect(typeof theState.testType).toBe("string");
  });
});
