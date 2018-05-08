import React, { Component } from "react";
import styled from "styled-components";
import CloseIcon from "mdi-react/CloseIcon";
import CheckCircleOutlineIcon from "mdi-react/CheckCircleOutlineIcon";
import { connect } from "react-redux";
import { addNewDictionary } from "../actions.js";
import { DelBox, ClickBox } from "./../presentational/Containers.js";

const AddDictionaryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 240px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 3px;
  box-shadow: 1px 1px 5px 0 grey;
  background-color: lightgrey;
  cursor: pointer;
  &:hover {
    background-color: #8bbf9f;
  }
`;

const InputDictionaryContainer = AddDictionaryContainer.extend`
  background-color: #5299d3;
  box-shadow: 1px 1px 5px 0 #427baa;
  cursor: default;
  &:hover {
    background-color: #5299d3;
  }
`;

const mapDispatchToProps = dispatch => ({
  addNewDictionary: dictionaryName => dispatch(addNewDictionary(dictionaryName))
});

class AddDictionaryComponent extends Component {
  constructor(props) {
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

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.props.addNewDictionary(this.input.value);
      this.toggleAddDictionary();
    }
  };

  handleAddNewDictionary = () => {
    this.props.addNewDictionary(this.input.value);
    this.toggleAddDictionary();
  };

  render() {
    if (this.state.toggleAddDictionaryInput) {
      return (
        <InputDictionaryContainer>
          <input
            style={{ backgroundColor: "#E0F1FF" }}
            onKeyPress={this.handleKeyPress}
            autoFocus={true}
            onBlur={this.toggleAddDictionary}
            ref={comp => (this.input = comp)}
            placeholder="Add..."
          />
          <DelBox>
            <CloseIcon onClick={this.toggleAddDictionary} />
          </DelBox>
          <ClickBox>
            <CheckCircleOutlineIcon onClick={this.handleAddNewDictionary} />
          </ClickBox>
        </InputDictionaryContainer>
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

export default connect(null, mapDispatchToProps)(AddDictionaryComponent);
