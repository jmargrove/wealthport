import React, { Component } from "react";
import styled from "styled-components";
import CloseIcon from "mdi-react/CloseIcon";
import CheckCircleOutlineIcon from "mdi-react/CheckCircleOutlineIcon";
import { connect } from "react-redux";
import { addNewDictionary } from "../actions.js";

const AddDictionaryContainer = styled.div`
  height: 60px;
  width: 240px;
  margin: 20px;
  margin-bottom: 0;
  margin-top: 0;
  background-color: lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: grab;
  &:hover {
    background-color: #8bbf9f;
  }
`;

const InputDictionaryContainer = styled.div`
  height: 60px;
  width: 240px;
  margin: 20px;
  margin-top: 0;
  margin-bottom: 0;
  background-color: #5299d3;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
`;

const ClickBox = styled.div`
  width: 20px;
  height: 20px;
  border: solid;
  border-color: black;
  border-width: thin;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  &:hover {
    background-color: #8bbf9f;
  }
`;

const DelBox = ClickBox.extend`
  &:hover {
    background-color: #db5461;
  }
`;

const mapDispatchToProps = dispatch => ({
  addNewDictionary: (name: string) => dispatch(addNewDictionary(name))
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
            onKeyPress={this.handleKeyPress}
            autoFocus={true}
            onBlur={() => this.setState({ toggleAddDictionaryInput: false })}
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
          <div> Add Dictionary </div>
        </AddDictionaryContainer>
      );
    }
  }
}

export default connect(null, mapDispatchToProps)(AddDictionaryComponent);
