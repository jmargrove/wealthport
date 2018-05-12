import React from "react";
import { shallow, mount, configure } from "enzyme";
import renderer from "react-test-renderer";
import AddDictionaryComponent from "./../src/components/AddDictionaryComponent.js";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { createStore } from "redux";
import calculatorReducers from "./../src/reducer.js";
import Adapter from "enzyme-adapter-react-15";
configure({ adapter: new Adapter() });

describe(">>>AddDictionaryComponent  +++capturing Snapshot of AddDictionaryComponent", () => {
  const mockStore = configureStore();
  let store, wrapper;

  it("+++capturing Snapshot of AddDictionaryComponent", () => {
    store = createStore(calculatorReducers);
    const renderedValue = renderer
      .create(
        <Provider store={store}>
          <AddDictionaryComponent />
        </Provider>
      )
      .toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
