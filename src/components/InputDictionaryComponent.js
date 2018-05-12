import React, { Component } from "react";
import CloseIcon from "mdi-react/CloseIcon";
import { connect } from "react-redux";
import CheckCircleOutlineIcon from "mdi-react/CheckCircleOutlineIcon";
import { addNewDictionary } from "./../actions/actions.js";
import {
  DelBox,
  ClickBox,
  InputDictionaryContainer
} from "./../presentational/Containers.js";

const mapDispatchToProps = dispatch => ({
  addNewDictionary: dictionaryName => dispatch(addNewDictionary(dictionaryName))
});

class InputDictionaryComponent extends Component {
  constructor (props) {
    super(props);
    this.state = {
      toggleAddDictionaryInput: false
    };
  }

  handleAddNewDictionary = () => {
    this.props.addNewDictionary(this.input.value);
    this.props.toggleAddDictionary();
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.props.addNewDictionary(this.input.value);
      this.props.toggleAddDictionary();
    }
  };

  render () {
    return (
      <InputDictionaryContainer className="InputDictionaryContainer">
        <input
          style={{ backgroundColor: "#E0F1FF" }}
          onKeyPress={this.handleKeyPress}
          autoFocus={true}
          onBlur={this.props.toggleAddDictionary}
          ref={comp => (this.input = comp)}
          placeholder="Add..."
        />
        <DelBox onMouseDown={this.props.toggleAddDictionary}>
          <CloseIcon />
        </DelBox>
        <ClickBox onMouseDown={this.handleAddNewDictionary}>
          <CheckCircleOutlineIcon />
        </ClickBox>
      </InputDictionaryContainer>
    );
  }
}

export default connect(null, mapDispatchToProps)(InputDictionaryComponent);
