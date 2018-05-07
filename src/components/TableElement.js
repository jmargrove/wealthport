import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import CheckCircleOutlineIcon from "mdi-react/CheckCircleOutlineIcon";
import DeleteForeverIcon from "mdi-react/DeleteForeverIcon";
import { EditRow } from "../actions.js";
import { deleteRow } from "../actions.js";

const mapDispatchToProps = dispatch => ({
  editRow: obj => dispatch(EditRow(obj)),
  deleteRow: obj => dispatch(deleteRow(obj))
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

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.props.editRow({
        domain: this.inputDomain.value,
        range: this.inputRange.value,
        dictionary: this.state.dictionary,
        i: this.state.i
      });
      this.setState({ toggleInput: false });
    }
  };

  handleEdit = () => {
    console.log("this is not working ////////");
    this.props.editRow({
      domain: this.inputDomain.value,
      range: this.inputRange.value,
      dictionary: this.state.dictionary,
      i: this.state.i
    });
    this.setState({ toggleInput: false });
  };

  toggleInput = (value, focus, input, editButton) => {
    return !this.state.toggleInput ? (
      <TableText>{value}</TableText>
    ) : (
      <InputContainer>
        <input
          className="InputElement"
          ref={el => (this[input] = el)}
          onKeyPress={this.handleKeyPress}
          autoFocus={focus}
          placeholder={value}
        />
        {editButton ? (
          <Box
            onClick={() =>
              this.props.deleteRow({
                dictionary: this.state.dictionary,
                rowNumber: this.state.i
              })}
          >
            <DeleteForeverIcon />
          </Box>
        ) : null}
        {editButton ? (
          <Box onClick={() => this.handleEdit()} style={{ marginLeft: "2px" }}>
            <CheckCircleOutlineIcon />
          </Box>
        ) : null}
      </InputContainer>
    );
  };

  whichErrorHasBeenThrown = error => {
    if (error !== "") {
      return "red";
    }
  };

  render() {
    console.log("the state ...?", this.state.testResult);
    const elementDomain = this.state.domain;
    const elementRange = this.state.range;
    const backColorEditing = this.state.toggleInput ? "#fgfgfg" : "white";
    const backColorError = this.whichErrorHasBeenThrown(this.state.testResult);
    return (
      <tbody>
        <tr>
          <TableElementComtainer
            style={{ backgroundColor: backColorError }}
            onClick={() =>
              this.setState({
                toggleInput: true,
                focusLeft: true
              })}
          >
            {this.toggleInput(
              elementDomain,
              this.state.focusLeft,
              "inputDomain"
            )}
          </TableElementComtainer>
          <TableElementComtainer
            style={{ backgroundColor: backColorError }}
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

const TableElementComtainer = styled.td`
  height: 30px;
  background-color: white;
  cursor: text;
  &:hover {
    background-color: grey;
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 235px;
  height: 28px;
  background-color: red;
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
  background-color: blue;
  margin-left: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid;
  border-width: thin;
  border-radius: 2px;
  cursor: grab;
  &:hover {
    background-color: white;
  }
`;
