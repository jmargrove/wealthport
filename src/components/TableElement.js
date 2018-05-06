import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import CheckCircleOutlineIcon from "mdi-react/CheckCircleOutlineIcon";
import DeleteForeverIcon from "mdi-react/DeleteForeverIcon";
import { EditRow } from "../actions.js";

const mapDispatchToProps = dispatch => ({
  EditRow: obj => dispatch(EditRow(obj))
});

const TableElementComtainer = styled.td`
  height: 30px;
  background-color: white;
  cursor: grab;
  &:hover {
    background-color: lightgrey;
  }
`;

const InputElement = styled.input`
  position: relative;
  padding: 0;
  margin: 0
  width: 200px;
  background-color: transparent;
  cursor: text;
  font-size: 15px;
  display: block;
  height: 20px;
  display: block;
  border: none;
  overflow: auto;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 235px;
  height: 28px;
  background-color: transparent;
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
  background-color: transparent;
  margin-left: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid;
  border-width: thin;
  border-radius: 2px;
  &:hover {
    background-color: orange;
  }
`;

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
      dictionary: ""
    };
  }

  handleKeyPress = e => {
    console.log("the value", e.target.value);
    if (e.key == "Enter") {
      this.setState({ toggleInput: false });
    }
  };

  handleEdit = () => {
    this.setState({ toggleInput: false });
  };

  deleteRow = content => {
    this.props.toggleDelete(content);
    //this.setState({ domain: "", range: "" });
  };

  toggleInput = (value, focus, editButton) => {
    return !this.state.toggleInput ? (
      <TableText>{value}</TableText>
    ) : (
      <InputContainer>
        <InputElement
          refName={ref => (this.input = ref)}
          onKeyPress={this.handleKeyPress}
          autoFocus={focus}
          placeholder={value}
        />
        {editButton ? (
          <Box
            onClick={() =>
              this.deleteRow({
                dictionary: this.state.dictionary,
                rowNumber: this.state.i
              })}
          >
            <DeleteForeverIcon />
          </Box>
        ) : null}
        {editButton ? (
          <Box onClick={this.handleEdit} style={{ marginLeft: "2px" }}>
            <CheckCircleOutlineIcon />
          </Box>
        ) : null}
      </InputContainer>
    );
  };

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
        i: nextProps.i,
        dictionary: nextProps.dictionary
      });
    }
  }

  render() {
    const elementDomain = this.state.domain;
    const elementRange = this.state.range;
    const backColor = this.state.toggleInput ? "lightgrey" : "white";
    return (
      <tr>
        <TableElementComtainer
          style={{ backgroundColor: backColor }}
          onClick={() =>
            this.setState({
              toggleInput: true,
              focusLeft: true
            })}
        >
          {this.toggleInput(elementDomain, this.state.focusLeft)}
        </TableElementComtainer>
        <TableElementComtainer
          style={{ backgroundColor: backColor }}
          onClick={() =>
            this.setState({
              toggleInput: true,
              focusRight: true
            })}
        >
          {this.toggleInput(elementRange, this.state.focusRight, true)}
        </TableElementComtainer>
      </tr>
    );
  }
}

export default connect(null, mapDispatchToProps)(TableElement);
