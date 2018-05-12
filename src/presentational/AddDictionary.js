import React, { Component } from "react";
import { AddDictionaryContainer } from "./Containers.js";
import InputDictionaryComponent from "./../components/InputDictionaryComponent.js";

class AddDictionary extends Component {
  constructor (props) {
    super(props);
    this.state = {
      toggleAddDictionaryInput: false
    };
  }

  toggleAddDictionary = () => {
    this.setState((prevState, props) => ({
      toggleAddDictionaryInput: !prevState.toggleAddDictionaryInput
    }));
  };

  render () {
    if (this.state.toggleAddDictionaryInput) {
      return (
        <InputDictionaryComponent
          toggleAddDictionary={this.toggleAddDictionary}
        />
      );
    } else {
      return (
        <AddDictionaryContainer onClick={this.toggleAddDictionary}>
          <p> Add Dictionary </p>
        </AddDictionaryContainer>
      );
    }
  }
}

export default AddDictionary;
