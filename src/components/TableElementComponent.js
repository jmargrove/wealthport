import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import DeleteForeverIcon from "mdi-react/DeleteForeverIcon";
import { editRow } from "./../actions/actions.js";
import { deleteRow } from "./../actions/actions.js";
import { testDuplicateRows } from "./../actions/actions.js";
import { testDuplicateDomains } from "./../actions/actions.js";
import { testCycles } from "./../actions/actions.js";
import { testChain } from "./../actions/actions.js";
import { ClickBox } from "./../presentational/Containers.js";

const DelBox = ClickBox.extend`
  background-color: #40a065;
  margin-left: 25px;
  &:hover {
    background-color: #db5461;
  }
`;

const TableElementComtainer = styled.td`
  height: 30px;
  background-color: white;
  box-shadow: 2px 2px 5px 0 grey;
  cursor: text;
  &:hover {
    background-color: #40a065;
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

const mapDispatchToProps = dispatch => ({
  editRow: obj => dispatch(editRow(obj)),
  deleteRow: obj => dispatch(deleteRow(obj)),
  testDuplicateRows: testObj => dispatch(testDuplicateRows(testObj)),
  testDuplicateDomains: testObj => dispatch(testDuplicateDomains(testObj)),
  testCycles: testObj => dispatch(testCycles(testObj)),
  testChain: testObj => dispatch(testChain(testObj))
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

  whichColorForElement = (error, input) => {
    if (input) {
      return "#8bbf9f";
    } else if (error === "") {
      return null;
    } else if (error === "duplicate row" || error === "duplicate domain") {
      return "#EC9A29";
    } else {
      return "#DF2935";
    }
  };

  whichTestToDispatch = (whichTestDispatch, dictionary) => {
    const dispatchObj = { dictionary: dictionary, test: whichTestDispatch };
    switch (whichTestDispatch) {
      case "duplicate row": {
        this.props.testDuplicateRows(dispatchObj);
        break;
      }
      case "duplicate domain": {
        this.props.testDuplicateDomains(dispatchObj);
        break;
      }
      case "Cycles": {
        this.props.testCycles(dispatchObj);
        break;
      }
      case "Chain": {
        this.props.testChain(dispatchObj);
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
      this.whichTestToDispatch(testType, this.state.dictionary);
    }
  };

  handleEdit = testType => {
    if (this.inputDomain && this.inputRange) {
      this.whichTestToDispatch(testType, this.state.dictionary);
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
    this.whichTestToDispatch(testType, this.state.dictionary);
  };

  toggleInput = (
    value, // elementValue in table
    focus, // focus to edit
    input, // inputDomain or inputRange
    deleteRowButton // show deleteRowButton
  ) => {
    return !this.state.toggleInput ? (
      <TableText>{value}</TableText>
    ) : (
      <InputContainer>
        <input
          className="InputElement"
          ref={el => (this[input] = el)}
          onKeyPress={e => this.handleKeyPress(e, this.state.testResult)}
          onBlur={this.handleEdit}
          autoFocus={focus}
          placeholder={value}
        />
        {deleteRowButton ? (
          <DelBox
            style={{ marginRight: "5px" }}
            onMouseDown={() =>
              this.handleDeleteRowAction(this.state.testResult)}
          >
            <DeleteForeverIcon />
          </DelBox>
        ) : null}
      </InputContainer>
    );
  };

  render() {
    const elementDomain = this.state.domain;
    const elementRange = this.state.range;
    const testResult = this.state.testResult;
    const toggleInput = this.state.toggleInput;
    const backColor = this.whichColorForElement(testResult, toggleInput);
    return (
      <tbody>
        <tr>
          <TableElementComtainer
            style={{
              backgroundColor: backColor
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
              false
            )}
          </TableElementComtainer>
          <TableElementComtainer
            style={{
              backgroundColor: backColor
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
              true
            )}
          </TableElementComtainer>
        </tr>
      </tbody>
    );
  }
}

export default connect(null, mapDispatchToProps)(TableElement);
