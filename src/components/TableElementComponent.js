import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  editRow,
  deleteRow,
  testDuplicateRows,
  testDuplicateDomains,
  testCycles,
  testChain
} from "./../actions/actions.js";
import ToggleTableInput from "./../presentational/ToggleTableInput.js";

const TableElementContainer = styled.td`
  height: 30px;
  background-color: white;
  box-shadow: 2px 2px 5px 0 grey;
  cursor: text;
  &:hover {
    background-color: #40a065;
  }
`;

//description: elements in table, tests on edit or delete to update elements
//with correct data

const mapDispatchToProps = dispatch => ({
  editRow: obj => dispatch(editRow(obj)),
  deleteRow: obj => dispatch(deleteRow(obj)),
  testDuplicateRows: testObj => dispatch(testDuplicateRows(testObj)),
  testDuplicateDomains: testObj => dispatch(testDuplicateDomains(testObj)),
  testCycles: testObj => dispatch(testCycles(testObj)),
  testChain: testObj => dispatch(testChain(testObj))
});

class TableElement extends Component {
  constructor (props) {
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

  componentDidMount () {
    this.setState({
      domain: this.props.domain,
      range: this.props.range,
      i: this.props.i,
      dictionary: this.props.dictionary
    });
  }

  componentWillReceiveProps (nextProps) {
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
    case "cycle": {
      this.props.testCycles(dispatchObj);
      break;
    }
    case "chain": {
      this.props.testChain(dispatchObj);
      break;
    }
    default:
      return null;
    }
  };

  handleEdit = (testType, input = "", inputType, ekey) => {
    if (ekey === "Enter") {
      this.props.editRow({
        domain: inputType === "inputDomain" ? input : "",
        range: inputType === "inputRange" ? input : "",
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

  handleDeleteRowAction = testType => {
    this.props.deleteRow({
      dictionary: this.state.dictionary,
      rowNumber: this.state.i
    });
    this.whichTestToDispatch(testType, this.state.dictionary);
  };

  render () {
    const elementDomain = this.state.domain;
    const elementRange = this.state.range;
    const testResult = this.state.testResult;
    const toggleInput = this.state.toggleInput;
    const backColor = this.whichColorForElement(testResult, toggleInput);
    return (
      <tbody>
        <tr>
          <TableElementContainer
            style={{
              backgroundColor: backColor
            }}
            onClick={() =>
              this.setState({
                toggleInput: true,
                focusLeft: true
              })}
          >
            <ToggleTableInput
              value={elementDomain}
              focus={this.state.focusLeft}
              input="inputDomain"
              deleteRowButton={false}
              handleDeleteRowAction={this.handleDeleteRowAction}
              handleEdit={this.handleEdit}
              toggleInput={this.state.toggleInput}
              testResult={this.state.testResult}
            />
          </TableElementContainer>
          <TableElementContainer
            style={{
              backgroundColor: backColor
            }}
            onClick={() =>
              this.setState({
                toggleInput: true,
                focusRight: true
              })}
          >
            <ToggleTableInput
              value={elementRange}
              focus={this.state.focusRight}
              input="inputRange"
              deleteRowButton={true}
              handleDeleteRowAction={this.handleDeleteRowAction}
              handleEdit={this.handleEdit}
              toggleInput={this.state.toggleInput}
              testResult={this.state.testResult}
            />
          </TableElementContainer>
        </tr>
      </tbody>
    );
  }
}

export default connect(null, mapDispatchToProps)(TableElement);
