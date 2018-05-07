import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import CheckCircleOutlineIcon from "mdi-react/CheckCircleOutlineIcon";
import DeleteForeverIcon from "mdi-react/DeleteForeverIcon";
import { EditRow } from "../actions.js";
import { deleteRow } from "../actions.js";
import { testDuplicateRows } from "../actions.js";
import { testDuplicateDomains } from "../actions.js";
import { testCycles } from "../actions.js";
import { testChain } from "../actions.js";

const mapDispatchToProps = dispatch => ({
  editRow: obj => dispatch(EditRow(obj)),
  deleteRow: obj => dispatch(deleteRow(obj)),
  testDuplicateRows: dictionary => dispatch(testDuplicateRows(dictionary)),
  testDuplicateDomains: dictionary =>
    dispatch(testDuplicateDomains(dictionary)),
  testCycles: dictionary => dispatch(testCycles(dictionary)),
  testChain: dictionary => dispatch(testChain(dictionary))
});

class TableElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleInput: false,
      value: "",
      focusLeft: false,
      focusRight: false,
      domain: "",
      range: "",
      i: 0,
      dictionary: "",
      testResult: ""
    };
  }

  componentDidMount() {
    this.setState({
      domain: this.props.domain,
      range: this.props.range,
      i: this.props.i,
      dictionary: this.props.dictionary
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({
        domain: nextProps.domain,
        range: nextProps.range,
        testResult: nextProps.testResult,
        i: nextProps.i,
        dictionary: nextProps.dictionary,
        toggleInput: false
      });
    }
  }

  handleReTestPostDelEdit = testType => {
    switch (testType) {
      case "duplicate row": {
        this.props.testDuplicateRows(this.state.dictionary);
        break;
      }
      case "duplicate domain": {
        this.props.testDuplicateDomains(this.state.dictionary);
        break;
      }
      case "Cycle": {
        this.props.testCycles(this.state.dictionary);
        break;
      }
      case "Chain": {
        this.props.testChain(this.state.dictionary);
        break;
      }
      default:
        return null;
    }
  };

  handleKeyPress = (e, testType) => {
    if (e.key === "Enter") {
      this.props.editRow({
        domain: this.inputDomain ? this.inputDomain.value : "",
        range: this.inputRange ? this.inputRange.value : "",
        dictionary: this.state.dictionary,
        i: this.state.i
      });
      this.setState({
        toggleInput: false,
        focusLeft: false,
        focusRight: false
      });
      this.handleReTestPostDelEdit(testType);
    }
  };

  handleEdit = testType => {
    if (this.inputDomain && this.inputRange) {
      this.handleReTestPostDelEdit(testType);
      this.props.editRow({
        domain: this.inputDomain.value,
        range: this.inputRange.value,
        dictionary: this.state.dictionary,
        i: this.state.i
      });
      this.setState({
        toggleInput: false,
        focusLeft: false,
        focusRight: false
      });
    }
  };

  handleDeleteRowAction = testType => {
    this.props.deleteRow({
      dictionary: this.state.dictionary,
      rowNumber: this.state.i
    });
    this.handleReTestPostDelEdit(testType);
  };

  toggleInput = (
    value,
    focus,
    input,
    editButton,
    backColorError,
    backColorEditing
  ) => {
    return !this.state.toggleInput ? (
      <TableText>{value}</TableText>
    ) : (
      <InputContainer>
        <input
          style={{
            backgroundColor: backColorError === "" ? "white" : backColorEditing
          }}
          className="InputElement"
          ref={el => (this[input] = el)}
          onKeyPress={e => this.handleKeyPress(e, this.state.testResult)}
          onBlur={this.handleEdit}
          autoFocus={focus}
          placeholder={value}
        />
        {editButton ? (
          <Box
            style={{ marginRight: "5px" }}
            onMouseDown={() =>
              this.handleDeleteRowAction(this.state.testResult)}
          >
            <DeleteForeverIcon />
          </Box>
        ) : null}
      </InputContainer>
    );
  };

  whichErrorHasBeenThrown = error => {
    if (error === "") {
      return null;
    } else if (error === "duplicate row" || error === "duplicate domain") {
      return "#EC9A29";
    } else {
      return "#DF2935";
    }
  };

  render() {
    console.log("this.state", this.state);
    const elementDomain = this.state.domain;
    const elementRange = this.state.range;
    const backColorError = this.whichErrorHasBeenThrown(this.state.testResult);
    const backColorEditing = this.state.toggleInput ? backColorError : null;
    return (
      <tbody
        style={{
          backgroundColor:
            backColorError !== "" ? backColorError : backColorEditing
        }}
      >
        <tr
          style={{
            backgroundColor:
              backColorError !== "" ? backColorError : backColorEditing
          }}
        >
          <TableElementComtainer
            style={{
              backgroundColor:
                backColorError !== "" ? backColorError : backColorEditing
            }}
            onClick={() =>
              this.setState({
                toggleInput: true,
                focusLeft: true
              })}
          >
            {this.toggleInput(
              elementDomain,
              this.state.focusLeft,
              "inputDomain",
              false,
              backColorError,
              backColorEditing
            )}
          </TableElementComtainer>
          <TableElementComtainer
            style={{
              backgroundColor:
                backColorError !== "" ? backColorError : backColorEditing
            }}
            onClick={() =>
              this.setState({
                toggleInput: true,
                focusRight: true
              })}
          >
            {this.toggleInput(
              elementRange,
              this.state.focusRight,
              "inputRange",
              true,
              backColorError,
              backColorEditing
            )}
          </TableElementComtainer>
        </tr>
      </tbody>
    );
  }
}

export default connect(null, mapDispatchToProps)(TableElement);

const TableElementComtainer = styled.td`
  height: 30px;
  background-color: white;
  cursor: text;
  &:hover {
    background-color: #8bbf9f;
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 235px;
  height: 28px;
  margin-left: 10px;
`;

const TableText = styled.p`
  margin-left: 10px;
  font-size: 15px;
  max-width: 230px;
`;

const Box = styled.div`
  height: 20px;
  width: 20px;
  background-color: white;
  margin-left: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid;
  border-width: thin;
  border-radius: 2px;
  cursor: grab;
  &:hover {
    background-color: #db5461;
  }
`;
