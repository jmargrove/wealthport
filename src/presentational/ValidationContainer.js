import React, { Component } from "react";
import styled from "styled-components";

//description: contains the validation test elements/containers, changes colour depending on
// what is being tested/validated

const TestContainer = styled.div`
  width: 248px;
  height: 50px;
  background-color: white;
  border-color: black;
  border: solid;
  border-width: thin;
  border-radius: 3px;
  margin: 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 2px 2px 5px 0 grey;
`;

class ValidationContainer extends Component {
  whichColorForTest = testType => {
    if (testType === "") {
      return null;
    } else if (
      testType === "duplicate row" ||
      testType === "duplicate domain"
    ) {
      return "#EC9A29";
    } else if (testType === "cycle" || testType === "chain") {
      return "#DF2935";
    }
  };

  capitalizeFirstLetter = str => {
    const arr = str.split("");
    const firstLet = arr[0].toUpperCase();
    arr[0] = firstLet;
    return arr.join("");
  };

  render () {
    const testType = this.props.testType;
    const backColor = this.whichColorForTest(testType);
    const el = this.props.el;
    const title = this.capitalizeFirstLetter(el);
    return (
      <TestContainer
        style={{
          backgroundColor: testType === el ? backColor : "white"
        }}
      >
        <p style={{ marginLeft: "5px", fontWeight: "bold" }}>{title}</p>
        {this.props.children}
      </TestContainer>
    );
  }
}

export default ValidationContainer;
