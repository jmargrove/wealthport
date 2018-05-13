import React, { Component } from "react";
import styled from "styled-components";
import DeleteForeverIcon from "mdi-react/DeleteForeverIcon";
import { ClickBox } from "./../presentational/Containers.js";

//description: displays the table element or table input for editing etc...

const DelBox = ClickBox.extend`
  background-color: #40a065;
  margin-left: 25px;
  &:hover {
    background-color: #db5461;
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

class ToggleTableInput extends Component {
  render () {
    if (!this.props.toggleInput) {
      return <TableText>{this.props.value}</TableText>;
    } else {
      return (
        <InputContainer>
          <input
            className="InputElement"
            ref={el => (this[this.props.input] = el)}
            onKeyPress={e =>
              this.props.handleEdit(
                this.props.testResult,
                this[this.props.input].value,
                this.props.input,
                e.key
              )}
            onBlur={() => {
              this.props.handleEdit(
                this.props.testResult,
                this[this.props.input].value,
                this.props.input,
                "Enter"
              );
            }}
            autoFocus={this.props.focus}
            placeholder={this.props.value}
          />
          {this.props.deleteRowButton ? (
            <DelBox
              style={{ marginRight: "5px" }}
              onMouseDown={() =>
                this.props.handleDeleteRowAction(this.props.testResult)}
            >
              <DeleteForeverIcon />
            </DelBox>
          ) : null}
        </InputContainer>
      );
    }
  }
}

export default ToggleTableInput;
