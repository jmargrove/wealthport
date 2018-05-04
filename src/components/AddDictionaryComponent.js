import React, { Component } from "react";
import styled from "styled-components";
import CloseIcon from "mdi-react/CloseIcon";
import CheckCircleOutlineIcon from "mdi-react/CheckCircleOutlineIcon";
import { connect } from "react-redux";
import { addNewDictionary } from "../actions.js";

const mapDispatchToProps = dispatch => ({
  addNewDictionary: (name: string) => dispatch(addNewDictionary(name))
});

const AddDictionaryContainer = styled.div`
  height: 60px;
  width: 240px;
  margin: 20px;
  margin-bottom: 0;
  background-color: lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: grab;
  &:hover {
    background-color: white;
  }
`;

const InputDictionaryContainer = styled.div`
  height: 60px;
  width: 240px;
  margin: 20px;
  margin-bottom: 0;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
`;

const ClickBox = styled.div`
  width: 25px;
  height: 25px;
  border: solid;
  border-color: black;
  border-width: thin;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  &:hover {
    background-color: lightgrey;
  }
`;

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
    console.log(e);
    if (e.key == "Enter") {
      this.props.addNewDictionary(this.input.value);
      this.toggleAddDictionary();
    }
  };

  render() {
    console.log("the state", this.state);
    if (this.state.toggleAddDictionaryInput) {
      return (
        <InputDictionaryContainer>
          <input
            onKeyPress={this.handleKeyPress}
            autoFocus={true}
            ref={comp => (this.input = comp)}
            placeholder="Add..."
          />
          <ClickBox>
            <CloseIcon onClick={() => this.toggleAddDictionary()} />
          </ClickBox>
          <ClickBox>
            <CheckCircleOutlineIcon
              onClick={i => {
                this.props.addNewDictionary(this.input.value);
                this.toggleAddDictionary();
              }}
            />
          </ClickBox>
        </InputDictionaryContainer>
      );
    } else {
      return (
        <AddDictionaryContainer onClick={() => this.toggleAddDictionary()}>
          <div> New Dictionary </div>
        </AddDictionaryContainer>
      );
    }
  }
}

export default connect(null, mapDispatchToProps)(AddDictionaryComponent);
